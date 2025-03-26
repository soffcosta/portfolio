import { Typography, Timeline, Card } from "antd";
import { BookOutlined, ExperimentOutlined } from "@ant-design/icons";
import { useLanguage } from "../context/LanguageContext";

const { Title, Text } = Typography;

const Education = () => {
  const { t } = useLanguage();

  const educationItems = [
    {
      title: t("education.degree"),
      institution: t("education.university"),
      period: "2024 - Present",
      description: t("education.degree.desc"),
      icon: <BookOutlined />,
    },
    {
      title: t("education.highschool"),
      institution: t("education.highschool.institution"),
      period: "2019 - 2023",
      description: t("education.highschool.desc"),
      icon: <ExperimentOutlined />,
    },
  ];

  return (
    <div className="education-container">
      <Title level={2} className="section-title">
        {t("education.title")}
      </Title>

      <Timeline
        mode="alternate"
        items={educationItems.map((item, index) => ({
          children: (
            <Card
              style={{
                maxWidth: index % 2 === 0 ? "80%" : "80%",
                marginLeft: index % 2 === 0 ? "auto" : "0",
              }}
            >
              <Title level={4}>{item.title}</Title>
              <Text strong>{item.institution}</Text>
              <br />
              <Text type="secondary">{item.period}</Text>
              <p>{item.description}</p>
            </Card>
          ),
          dot: item.icon,
        }))}
      />
    </div>
  );
};

export default Education;
