import { Typography, Button, Space } from "antd";
import {
  DownloadOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import "../styles/Home.css";
import { useLanguage } from "../context/LanguageContext";

const { Title, Paragraph } = Typography;

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="home-container">
      <div className="hero-content">
        <Title>
          {t("home.greeting")}{" "}
          <span className="highlight">Sofia Costacaro</span>
        </Title>
        <Title level={2} className="subtitle">
          {t("home.role")}
        </Title>
        <Paragraph className="description">{t("home.description")}</Paragraph>

        <Space size="middle" className="action-buttons">
          <Button type="primary" size="large" icon={<DownloadOutlined />}>
            {t("home.download")}
          </Button>
          <div className="social-links">
            <Button
              type="text"
              icon={<LinkedinOutlined />}
              size="large"
              href="https://www.linkedin.com/in/sof%C3%ADa-costacaro-graphic-designer/"
              target="_blank"
            />
            <Button
              type="text"
              icon={<InstagramOutlined />}
              size="large"
              href="https://www.instagram.com/sc_portfolio_/"
              target="_blank"
            />
          </div>
        </Space>
      </div>
    </div>
  );
};

export default Home;
