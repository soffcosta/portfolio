import { Typography, Row, Col, Card, Button } from "antd";
import {
  InstagramOutlined,
  GlobalOutlined,
  ShopOutlined,
  TikTokOutlined,
} from "@ant-design/icons";
import { useLanguage } from "../context/LanguageContext";

const { Title, Text, Paragraph } = Typography;

const Experience = () => {
  const { t } = useLanguage();

  const experienceItems = [
    {
      title: t("experience.cm.title"),
      company: "Flora Joyería",
      period: "2025 - Present",
      description: t("experience.flora.description"),
      responsibilities: [
        t("experience.resp.1"),
        t("experience.resp.2"),
        t("experience.resp.3"),
        t("experience.resp.4"),
      ],
      links: [
        {
          type: "instagram",
          url: "https://www.instagram.com/floraa.arg/",
          icon: <InstagramOutlined />,
          label: "@floraa.arg",
        },
        {
          type: "website",
          url: "https://florajoyeria.empretienda.com.ar/",
          icon: <ShopOutlined />,
          label: "Flora Joyeria",
        },
        {
          type: "tiktok",
          url: "https://www.tiktok.com/@floraa.arg",
          icon: <TikTokOutlined />,
          label: "@floraa.arg",
        },
      ],
    },
    {
      title: t("experience.cm.title"),
      company: "Vitec Soluciones",
      period: "2024 - Present",
      description: t("experience.vitec.description"),
      responsibilities: [
        t("experience.resp.5"),
        t("experience.resp.6"),
        t("experience.resp.7"),
        t("experience.resp.8"),
      ],
      links: [
        {
          type: "instagram",
          url: "https://www.instagram.com/vitec_soluciones/",
          icon: <InstagramOutlined />,
          label: "@vitec_soluciones",
        },
        {
          type: "website",
          url: "https://vitecsoluciones.com.ar/",
          icon: <GlobalOutlined />,
          label: "Vitec Soluciones",
        },
      ],
    },
  ];

  return (
    <div className="experience-container">
      <Title level={2} className="section-title">
        {t("experience.title")}
      </Title>

      <Row gutter={[24, 36]}>
        {experienceItems.map((item, index) => (
          <Col xs={24} md={12} key={index}>
            <Card
              title={
                <div>
                  <Title level={4} style={{ margin: 0 }}>
                    {item.title}
                  </Title>
                  <Text strong>{item.company}</Text>
                  <br />
                  <Text type="secondary">{item.period}</Text>
                </div>
              }
              className="experience-card"
            >
              <Paragraph>{item.description}</Paragraph>

              <Title level={5}>{t("experience.responsibilities")}</Title>
              <ul className="responsibility-list">
                {item.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>

              <div className="company-links">
                {item.links.map((link, idx) => (
                  <Button
                    key={idx}
                    type="link"
                    icon={link.icon}
                    href={link.url}
                    target="_blank"
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Experience;
