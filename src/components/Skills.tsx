import { Typography, Row, Col, Card, Progress } from "antd";
import {
  AppstoreOutlined,
  BgColorsOutlined,
  CameraOutlined,
  LayoutOutlined,
} from "@ant-design/icons";
import { useLanguage } from "../context/LanguageContext";

const { Title, Text } = Typography;

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t("skills.designSoftware"),
      icon: <AppstoreOutlined />,
      skills: [
        { name: t("skills.photoshop"), level: 95 },
        { name: t("skills.illustrator"), level: 90 },
        { name: t("skills.indesign"), level: 85 },
        { name: t("skills.figma"), level: 80 },
      ],
    },
    {
      title: t("skills.designSkills"),
      icon: <BgColorsOutlined />,
      skills: [
        { name: t("skills.typography"), level: 90 },
        { name: t("skills.colorTheory"), level: 85 },
        { name: t("skills.composition"), level: 90 },
      ],
    },
    {
      title: t("skills.specialties"),
      icon: <LayoutOutlined />,
      skills: [
        { name: t("skills.brandId"), level: 85 },
        { name: t("skills.printDesign"), level: 90 },
        { name: t("skills.digitalDesign"), level: 80 },
      ],
    },
    {
      title: t("skills.other"),
      icon: <CameraOutlined />,
      skills: [
        { name: t("skills.photography"), level: 75 },
        { name: t("skills.uiux"), level: 70 },
        { name: t("skills.motion"), level: 65 },
      ],
    },
  ];

  return (
    <div className="skills-container">
      <Title level={2} className="section-title">
        {t("skills.title")}
      </Title>

      <Row gutter={[24, 24]}>
        {skillCategories.map((category, index) => (
          <Col xs={24} md={12} lg={12} key={index}>
            <Card
              title={
                <div style={{ display: "flex", alignItems: "center" }}>
                  {category.icon}
                  <span style={{ marginLeft: 8 }}>{category.title}</span>
                </div>
              }
            >
              {category.skills.map((skill, idx) => (
                <div key={idx} style={{ marginBottom: 16 }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Text strong>{skill.name}</Text>
                    <Text>{skill.level}%</Text>
                  </div>
                  <Progress percent={skill.level} showInfo={false} />
                </div>
              ))}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Skills;
