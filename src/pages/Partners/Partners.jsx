import './Partners.css';

export default function Partners() {
  const partners = [
    {
      name: "ICL",
      logo: "/images/icl-logo.png",
      url: "https://www.icl.ru/",
      description: "ICL — высокотехнологичная, динамично развивающаяся группа компаний, входящая в число крупнейших ИТ-компаний России, предоставляющая весь спектр ИТ-услуг, проектов, решений и продуктов. Компания была основана в 1991 году на базе завода ЭВМ Казанским производственным объединением вычислительных систем (КПО ВС)."
    },
    {
      name: "Татнефть",
      logo: "/images/tatneft-logo.png",
      url: "https://www.tatneft.ru/",
      description: "«Татнефть» - одна из крупнейших российских вертикально-интегрированных компаний, в составе которой динамично развиваются нефтегазодобыча, нефтепереработка, нефтегазохимия, сеть АЗС, композитный кластер, электроэнергетика, разработка и производство оборудования для нефтегазовой отрасли и блок сервисных структур."
    },
   
  ];

  return (
    <div className="partners-page">
      <div className="partners-container">
        <h1 className="page-title">Наши партнеры</h1>
        <p className="page-subtitle">
          Мы сотрудничаем с ведущими компаниями для повышения квалификации их сотрудников
        </p>
        
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
                <span className="external-link">↗</span>
              </div>
              <h3 className="partner-name">{partner.name}</h3>
              <p className="partner-description">{partner.description}</p>
              <span className="partner-button">
                Перейти на сайт →
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}