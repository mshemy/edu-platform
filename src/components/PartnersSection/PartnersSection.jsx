import './PartnersSection.css';

export default function PartnersSection() {
  const partners = [
    {
      name: "ICL",
      logo: "/images/icl-logo.png",  // <-- Локальный путь из public/images/
      url: "https://www.icl.ru/",
      description: "ICL — высокотехнологичная, динамично развивающаяся группа компаний, входящая в число крупнейших ИТ-компаний России, предоставляющая весь спектр ИТ-услуг, проектов, решений и продуктов. Компания была основана в 1991 году на базе завода ЭВМ Казанским производственным объединением вычислительных систем (КПО ВС)."
    },
    {
      name: "Татнефть",
      logo: "/images/tatneft-logo.png",  // <-- Локальный путь из public/images/
      url: "https://www.tatneft.ru/",
      description: "«Татнефть» - одна из крупнейших российских вертикально-интегрированных компаний, в составе которой динамично развиваются нефтегазодобыча, нефтепереработка, нефтегазохимия, сеть АЗС, композитный кластер, электроэнергетика, разработка и производство оборудования для нефтегазовой отрасли и блок сервисных структур."
    }
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2 className="section-title">Партнеры</h2>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <a 
              href={partner.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="partner-card"
              key={index}
            >
              <div className="partner-logo-wrapper">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="partner-logo"
                />
                <span className="external-arrow">↗</span>
              </div>
              <p className="partner-description">{partner.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}