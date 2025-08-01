import { useState } from "react";

export default function Hero4() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔽 For now, just log the form data
    console.log("Form submitted:", formData);

    // TODO: send to backend or WordPress REST API
    // fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

    // Optional: reset form
    setFormData({
      name: "",
      email: "",
      number: "",
      message: "",
    });
  };

  return (
    <section className="section d-block">
      <div className="banner-1 banner-4" style={{ backgroundImage: 'url(assets/imgs/page/homepage1/hero-image3.jpg)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <h1 className="color-white mb-25">BE TESTED. BE CERTIFIED. <br />BE UNSTOPPABLE</h1>
              <p className="font-md color-white mb-20">
                No Matter What You Make, Where You Make, Our Quality Solutions Are Always For You
              </p>
            </div>

            {/* 🟩 Contact Form */}
            <div className="col-lg-5 mb-30 pt-50 pb-50 pl-20 pr-20" style={{ backgroundColor: '#E8E9ED', borderRadius: '12px' }}>
              <div className="form-newsletter">
                <h3 className="mb-10">Contact us</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12 pb-10">
                      <input
                        className="form-control"
                        style={{ borderRadius: '10px' }}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="First Name *"
                        required
                      />
                    </div>

                    <div className="col-md-6 pb-10">
                      <input
                        className="form-control"
                        style={{ borderRadius: '10px' }}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                      />
                    </div>

                    <div className="col-md-6 pb-10">
                      <input
                        className="form-control"
                        style={{ borderRadius: '10px' }}
                        type="text"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        placeholder="Number"
                      />
                    </div>

                    <div className="col-md-12 pb-10">
                      <textarea
                        className="form-control"
                        style={{ borderRadius: '10px' }}
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message / Note"
                      />
                    </div>

                    <div className="col-md-12">
                      <button className="btn btn-brand-1-big" type="submit">Submit Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
