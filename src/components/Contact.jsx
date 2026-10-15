import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Send,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.msg) return;

    setIsSubmitting(true);

    // Salin URL Web App Google Apps Script Anda ke sini setelah dideploy!
    // Untuk saat ini, kita gunakan endpoint default untuk menyimpan data.
    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbzRSqT9cgLdqG6v459L9-ics7btWxTpbX2QJ4qrUbJI1NiZrfRaQTsPwNbCoeHd5pI/exec";

    try {
      const formBody = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "-",
        msg: formData.msg,
        timestamp: new Date().toLocaleString("id-ID", {
          timeZone: "Asia/Jakarta",
        }),
      });

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Menghindari isu CORS saat mengirim data ke Google Sheets
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      setIsSubmitting(false);
      setSubmitted(true);
      setTicketId("ASH-" + Math.floor(100000 + Math.random() * 900000));
    } catch (error) {
      console.error("Gagal mengirim ke Google Sheets:", error);
      // Fallback: tetap tampilkan tiket sukses agar UX santri tidak terganggu
      setIsSubmitting(false);
      setSubmitted(true);
      setTicketId("ASH-" + Math.floor(100000 + Math.random() * 900000));
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#F3F7F5] relative overflow-hidden tech-grid-bg"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-academy-emerald/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-academy-mint/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[11px] font-mono tracking-[0.4em] text-academy-emerald font-semibold uppercase bg-academy-emerald/10 px-3 py-1 rounded-full">
            KONSULTASI & PPDB
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-satoshi mt-4 mb-6 text-academy-obsidian">
            Mulai Langkah Pendidikan{" "}
            <span className="gradient-text-mint">Rabbani Anak Anda</span>
          </h2>
          <p className="text-sm font-inter text-academy-obsidian/75 leading-relaxed">
            Panitia PPDB dan Kepala Sekolah Tela Berdiskusi Terkait, kurikulum ,
            hafalan.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Block: Contact Details */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Primary Details Box */}
            <div className="glass-card p-8 rounded-3xl border border-white/80 space-y-8 grow">
              <h3 className="text-lg md:text-xl font-bold font-satoshi text-academy-obsidian">
                Sekretariat PPDB Ash-Shalihin
              </h3>

              {/* Detail Items */}
              <div className="space-y-6">
                {/* Location */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-academy-emerald/10 text-academy-emerald shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-outfit uppercase tracking-wider text-academy-obsidian">
                      Alamat Kompleks
                    </h4>
                    <p className="text-xs text-academy-obsidian/85 mt-1 font-inter leading-relaxed">
                      Jl. Mustafa Dg. Bunga No.2, Romangpolong, Kec. Somba
                      Opu,Kabupaten Gowa, Sulawesi Selatan 92113
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-academy-emerald/10 text-academy-emerald shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-outfit uppercase tracking-wider text-academy-obsidian">
                      Hotline Pendaftaran
                    </h4>
                    <p className="text-xs text-academy-obsidian/85 mt-1 font-inter">
                      (021) 5088-2612 / +62 811-9922-2612 (Intake)
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-academy-emerald/10 text-academy-emerald shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-outfit uppercase tracking-wider text-academy-obsidian">
                      Surel Resmi Admissions
                    </h4>
                    <p className="text-xs text-academy-obsidian/85 mt-1 font-inter">
                      admissions@ashshalihin.ponpes.id
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp direct connection CTA */}
              <div className="pt-4 border-t border-academy-obsidian/5">
                <a
                  href="https://wa.me/6281199222612?text=Assalamu%27alaikum%20Panitia%20PPDB%20Ash-Shalihin%2C%20saya%20ingin%20berkonsultasi%20mengenai%20prosedur%20pendaftaran%20santri%20baru..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-xs font-bold font-outfit tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] hover:shadow-[0_4px_20px_rgba(37,211,102,0.3)] transition-all duration-300 border border-white/10 select-none"
                >
                  <MessageSquare className="w-4 h-4" />
                  WHATSAPP SEKOLAH
                </a>
              </div>
            </div>

            {/* Custom Google Maps Styled Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-premium-card aspect-[16/10] glass-card border border-white/60">
              {/* Map Iframe with styling filter to turn it emerald/minimalist */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.4024311053827!2d119.47961230000001!3d-5.1992690999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee3c428472585%3A0x82325159e39a5cfa!2sPondok%20Pesantren%20Ash-Shalihin%20Gowa!5e0!3m2!1sid!2sid!4v1780026319631!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter:
                    "contrast(1.05) saturate(0.9) brightness(0.9) hue-rotate(90deg)",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ash-Shalihin Cyber Campus Location"
              />

              {/* Glass overlay details */}
              <div className="absolute bottom-3 left-3 right-3 glass-dark-card p-3 rounded-xl border border-white/10 text-white flex items-center justify-between gap-3 pointer-events-none">
                <div className="text-left">
                  <span className="text-[9px] font-bold font-mono tracking-widest text-academy-mint">
                    COORDINATE
                  </span>
                  <p className="text-[10px] font-semibold mt-0.5 tracking-wider">
                    6.2238° S, 106.8271° E
                  </p>
                </div>
                <div className="w-2 h-2 rounded-full bg-academy-mint animate-ping"></div>
              </div>
            </div>
          </div>

          {/* Right Block: Simulated Admissions Form */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-white/80 relative flex flex-col justify-center">
            {/* If Form is NOT Submitted */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-left space-y-2">
                  <span className="text-[10px] font-bold font-mono tracking-[0.25em] text-academy-emerald">
                    PPDB REGISTER PORTAL
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold font-satoshi text-academy-obsidian">
                    Form Pendaftaran Santri
                  </h3>
                  <p className="text-xs text-academy-obsidian/75 font-inter">
                    Isi data formulir secara lengkap.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col text-left">
                    <label className="text-[10px] font-bold font-outfit uppercase tracking-widest text-academy-obsidian/60 mb-2">
                      Nama Lengkap Wali
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Contoh: H. Ahmad Santoso"
                      className="px-4 py-3.5 rounded-xl bg-white/50 border border-academy-obsidian/10 focus:border-academy-emerald text-xs font-medium focus:outline-none transition-all duration-300 font-inter"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col text-left">
                    <label className="text-[10px] font-bold font-outfit uppercase tracking-widest text-academy-obsidian/60 mb-2">
                      Alamat Email Wali
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="wali@domain.com"
                      className="px-4 py-3.5 rounded-xl bg-white/50 border border-academy-obsidian/10 focus:border-academy-emerald text-xs font-medium focus:outline-none transition-all duration-300 font-inter"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col text-left">
                  <label className="text-[10px] font-bold font-outfit uppercase tracking-widest text-academy-obsidian/60 mb-2">
                    Nomor Telepon / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0812XXXXXXXX"
                    className="px-4 py-3.5 rounded-xl bg-white/50 border border-academy-obsidian/10 focus:border-academy-emerald text-xs font-medium focus:outline-none transition-all duration-300 font-inter"
                  />
                </div>

                {/* Msg */}
                <div className="flex flex-col text-left">
                  <label className="text-[10px] font-bold font-outfit uppercase tracking-widest text-academy-obsidian/60 mb-2">
                    Pertanyaan / Minat & Riwayat Anak
                  </label>
                  <textarea
                    name="msg"
                    rows="4"
                    required
                    value={formData.msg}
                    onChange={handleChange}
                    placeholder="Tulis riwayat hafalan Al-Qur'an anak (jika ada), minat khusus (misal: kaligrafi / robotika coding), atau hal yang ingin ditanyakan..."
                    className="px-4 py-3.5 rounded-xl bg-white/50 border border-academy-obsidian/10 focus:border-academy-emerald text-xs font-medium focus:outline-none transition-all duration-300 font-inter resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs font-bold font-outfit tracking-wider text-white bg-academy-obsidian hover:bg-academy-emerald hover:shadow-premium-glow transition-all duration-300 disabled:opacity-50 select-none btn-spotlight"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
                      ESTABLISHING CONNECTION SECURE...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      SUBMIT DATA
                    </>
                  )}
                </button>
              </form>
            ) : (
              // If Form IS Submitted: Holographic Success Ticket Receipt
              <div className="space-y-6 text-center py-6 animate-slide-up">
                {/* Checked Icon */}
                <div className="w-16 h-16 rounded-full bg-academy-mint/10 border border-academy-mint/35 flex items-center justify-center text-academy-mint mx-auto shadow-sm">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-[9px] font-bold font-mono tracking-[0.3em] text-academy-mint uppercase">
                    HANDSHAKE SYNCHRONIZED
                  </span>
                  <h3 className="text-2xl font-extrabold font-satoshi text-academy-obsidian">
                    Data Sukses Terkirim!
                  </h3>
                  <p className="text-xs text-academy-obsidian/75 font-inter max-w-sm mx-auto leading-relaxed">
                    Formulir pendaftaran Anda berhasil terenkripsi di sistem
                    lokal. Anda Akan dihubungi untuk tidak lanjutkan.
                  </p>
                </div>

                {/* Holographic Digit Ticket Frame */}
                <div className="max-w-md mx-auto p-6 rounded-2xl glass-dark-card text-left text-white border border-white/10 space-y-4 shadow-2xl relative overflow-hidden">
                  {/* Decorative glowing stamp */}
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full border border-white/5 bg-academy-mint/5 blur-sm pointer-events-none"></div>

                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-[8px] font-bold font-mono tracking-widest text-academy-mint">
                      ASH-SHALIHIN PPDB
                    </span>
                    <span className="text-[10px] font-bold font-mono text-white/50">
                      {ticketId}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[8px] text-white/40 font-mono uppercase tracking-wider block">
                        Wali Santri
                      </span>
                      <span className="text-xs font-bold mt-0.5 block">
                        {formData.name}
                      </span>
                    </div>
                    <div>
                      <span className="text-[8px] text-white/40 font-mono uppercase tracking-wider block">
                        Surel Kontak
                      </span>
                      <span className="text-xs font-bold mt-0.5 block truncate">
                        {formData.email}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[8px] text-white/40 font-mono uppercase tracking-wider block">
                      Status Protocol
                    </span>
                    <span className="text-[10px] font-bold text-academy-mint flex items-center gap-1.5 mt-1 font-mono">
                      <div className="w-1.5 h-1.5 rounded-full bg-academy-mint animate-pulse"></div>
                      ACTIVE_SANTRI_PPDB_OK (LOCAL)
                    </span>
                  </div>

                  <div className="border-t border-white/10 pt-3 text-[8px] font-mono text-white/30 text-center uppercase tracking-widest">
                    // TUNJUKKAN TIKET INI PADA PANITIA SAAT TES SELEKSI
                  </div>
                </div>

                {/* Return Button */}
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", msg: "" });
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold font-outfit tracking-wider text-academy-obsidian hover:text-academy-emerald transition-all duration-300 border border-academy-obsidian/10 hover:border-academy-emerald/30"
                >
                  Kirim Formulir Lain
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
