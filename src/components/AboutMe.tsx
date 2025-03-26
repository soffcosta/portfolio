import { Typography, Row, Col, Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useLanguage } from "../context/LanguageContext";

const { Title, Paragraph } = Typography;

const AboutMe = () => {
  const { t } = useLanguage();

  return (
    <div className="about-container">
      <Title level={2} className="section-title">
        {t("about.title")}
      </Title>
      <Row gutter={[24, 24]} align="middle">
        <Col xs={24} md={8}>
          <Avatar
            size={200}
            icon={<UserOutlined />}
            // Replace the line below with Sofia's image path
            // src="/path/to/sofia-profile-picture.jpg"
          />
        </Col>
        <Col xs={24} md={16}>
          <Card bordered={false}>
            <Paragraph>{t("about.p1")}</Paragraph>
            <Paragraph>{t("about.p2")}</Paragraph>
            <Paragraph>{t("about.p3")}</Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AboutMe;
