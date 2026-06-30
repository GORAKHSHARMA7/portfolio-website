import { useState, useRef } from "react";
import { business, waLink, telLink } from "../data/business";
import PageHero from "../components/PageHero";
import {
  IconPhone,
  IconWhatsapp,
  IconMail,
  IconPin,
  IconClock,
  IconArrowRight,
  IconUpload,
  IconCheck,
  IconClose,
} from "../components/Icons";
import "./Contact.css";

const MAX_FILE_MB = 8;

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [photo, setPhoto] = useState(null); // { file, previewUrl }
  const [photoError, setPhotoError] = useState("");
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhotoSelect = (e) => {
    const file = e.target.files?.[0];
    setPhotoError("");
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setPhotoError("Please upload an image file (JPG, PNG, etc).");
      return;
    }
    if (file.size > MAX_FILE_MB * 1024 * 1024) {
      setPhotoError(`Image is too large. Please choose a photo under ${MAX_FILE_MB}MB.`);
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    setPhoto({ file, previewUrl, uploading: true, uploadedUrl: null, failed: false });

    uploadPhoto(file, previewUrl);
  };

  const uploadPhoto = async (file, previewUrl) => {
    try {
      const body = new FormData();
      body.append("file", file);
      const response = await fetch("https://tmpfiles.org/api/v1/upload", {
        method: "POST",
        body: body,
      });
      if (!response.ok) throw new Error("Upload failed");
      const result = await response.json();
      if (result && result.data && result.data.url) {
        const dlUrl = result.data.url.replace("tmpfiles.org/", "tmpfiles.org/dl/");
        setPhoto((prev) => {
          if (prev && prev.previewUrl === previewUrl) {
            return { ...prev, uploading: false, uploadedUrl: dlUrl, failed: false };
          }
          return prev;
        });
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      console.error("Cloud upload error:", err);
      setPhoto((prev) => {
        if (prev && prev.previewUrl === previewUrl) {
          return { ...prev, uploading: false, uploadedUrl: null, failed: true };
        }
        return prev;
      });
    }
  };

  const removePhoto = () => {
    if (photo?.previewUrl) URL.revokeObjectURL(photo.previewUrl);
    setPhoto(null);
    setPhotoError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const buildMessage = () => {
    const lines = [
      `Hello ${business.name}, my name is ${form.name || "..."}.`,
      `Phone: ${form.phone || "..."}`,
    ];
    if (form.subject) lines.push(`Subject: ${form.subject}`);
    lines.push(`Message: ${form.message || "..."}`);
    if (photo) {
      if (photo.uploadedUrl) {
        lines.push(`Photo: ${photo.uploadedUrl}`);
      } else {
        lines.push(`(I've attached a photo of the item — see the file I just downloaded/saved.)`);
      }
    }
    return lines.join("\n");
  };

  const sendViaWhatsapp = () => {
    if (photo && !photo.uploadedUrl) {
      const ext = photo.file.name.split(".").pop() || "jpg";
      const a = document.createElement("a");
      a.href = photo.previewUrl;
      a.download = `Shyama-Tech-Mart-Repair-Photo.${ext}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    window.open(waLink(business.whatsappPrimary, buildMessage()), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact us"
        description="Call, message on WhatsApp, or stop by the store at Asuran Chowk. We're happy to help."
      />

      <section className="section">
        <div className="container contact-grid">
          {/* CONTACT INFO CARDS */}
          <div className="contact-info">
            <a href={telLink(business.phonePrimary)} className="contact-info__card">
              <div className="contact-info__icon"><IconPhone width={20} height={20} /></div>
              <div>
                <span>Call Us</span>
                <strong>+91 {business.phonePrimary}</strong>
                <strong>+91 {business.phoneSecondary}</strong>
              </div>
            </a>

            <a
              href={waLink(business.whatsappPrimary)}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info__card contact-info__card--wa"
            >
              <div className="contact-info__icon contact-info__icon--wa"><IconWhatsapp width={20} height={20} /></div>
              <div>
                <span>WhatsApp</span>
                <strong>+91 {business.whatsappPrimary}</strong>
                <strong>+91 {business.whatsappSecondary}</strong>
              </div>
            </a>

            <a href={`mailto:${business.email}`} className="contact-info__card">
              <div className="contact-info__icon"><IconMail width={20} height={20} /></div>
              <div>
                <span>Email</span>
                <strong>{business.email}</strong>
              </div>
            </a>

            <div className="contact-info__card contact-info__card--static">
              <div className="contact-info__icon"><IconPin width={20} height={20} /></div>
              <div>
                <span>Visit Us</span>
                <strong>{business.address}</strong>
              </div>
            </div>

            <div className="contact-info__card contact-info__card--static">
              <div className="contact-info__icon"><IconClock width={20} height={20} /></div>
              <div>
                <span>Store Hours</span>
                {business.hours.map((h) => (
                  <p key={h.day}>{h.day}: {h.time}</p>
                ))}
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="contact-form-card">
            <span className="eyebrow">Send a Message</span>
            <h2>Tell us what you need</h2>
            <p className="contact-form-card__sub">
              Fill the form, add a photo of the item if you have one, then send
              it straight to our WhatsApp.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <label>
                  Full Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Phone Number
                  <input
                    type="tel"
                    name="phone"
                    placeholder="10-digit mobile number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <label>
                Subject
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. Watch repair enquiry"
                  value={form.subject}
                  onChange={handleChange}
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about the device or product you're interested in..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </label>

              {/* PHOTO UPLOAD — damaged / repairable item */}
              <div className="photo-upload">
                <span className="photo-upload__label">
                  Photo of the item (optional)
                </span>

                {!photo && (
                  <label className="photo-upload__drop" htmlFor="item-photo">
                    <IconUpload width={22} height={22} />
                    <span>
                      <strong>Click to upload a photo</strong>
                      <small>Damaged item, watch, instrument, etc. — JPG or PNG, up to {MAX_FILE_MB}MB</small>
                    </span>
                  </label>
                )}

                <input
                  ref={fileInputRef}
                  id="item-photo"
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoSelect}
                  className="photo-upload__input"
                />

                {photoError && <p className="photo-upload__error">{photoError}</p>}

                {photo && (
                  <div className="photo-upload__preview">
                    <img src={photo.previewUrl} alt="Selected item to repair" />
                    <div className="photo-upload__preview-meta">
                      <div className="photo-upload__status">
                        {photo.uploading && (
                          <span className="upload-status upload-status--loading">
                            <span className="spinner"></span> Uploading photo...
                          </span>
                        )}
                        {!photo.uploading && photo.uploadedUrl && (
                          <span className="upload-status upload-status--success">
                            <IconCheck width={14} height={14} /> Ready to send!
                          </span>
                        )}
                        {!photo.uploading && photo.failed && (
                          <span className="upload-status upload-status--failed">
                            ⚠️ Upload failed. Will download to attach.
                          </span>
                        )}
                        {!photo.uploading && !photo.uploadedUrl && !photo.failed && (
                          <span className="upload-status">{photo.file.name}</span>
                        )}
                      </div>
                      <button type="button" onClick={removePhoto} aria-label="Remove photo">
                        <IconClose width={16} height={16} />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="contact-form__actions">
                <button type="submit" className="btn btn-primary" disabled={!form.name || !form.phone || !form.message || (photo && photo.uploading)}>
                  Prepare Message <IconArrowRight width={16} height={16} />
                </button>
              </div>

              {submitted && (
                <div className="contact-form-success">
                  <p>
                    <strong>Ready to send.</strong> Click below to open WhatsApp with your message pre-filled.
                  </p>
                  {photo && photo.uploadedUrl && (
                    <p className="contact-form-success__note contact-form-success__note--success">
                      🎉 <strong>Photo Link Included:</strong> We've successfully uploaded your image and included the link in the message. The technician will be able to view your photo directly!
                    </p>
                  )}
                  {photo && !photo.uploadedUrl && (
                    <p className="contact-form-success__note contact-form-success__note--warning">
                      One extra tap needed: WhatsApp doesn't allow websites to auto-attach files directly. The photo was saved to your downloads (named <code>Shyama-Tech-Mart-Repair-Photo</code>). After WhatsApp opens, tap the <strong>📎 attach</strong> icon and pick the downloaded image.
                    </p>
                  )}
                  <button type="button" className="btn btn-whatsapp" onClick={sendViaWhatsapp} disabled={photo && photo.uploading}>
                    <IconWhatsapp width={16} height={16} />
                    {photo && photo.uploading ? "Uploading Photo..." : "Send on WhatsApp"}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="section--tight section--soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Find Us</span>
            <h2>Our location</h2>
            <p>{business.addressShort}</p>
          </div>
          <div className="map-frame">
            <iframe
              title="Shyama Tech Mart Location"
              src={business.mapsEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            href={business.mapsLinkSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ marginTop: "1.5rem" }}
          >
            Get Directions <IconArrowRight width={16} height={16} />
          </a>
        </div>
      </section>
    </>
  );
}
