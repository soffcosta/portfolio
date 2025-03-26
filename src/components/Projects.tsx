import { Typography, Row, Col, Card, Tag, Button } from "antd";
import { BehanceOutlined, LinkOutlined } from "@ant-design/icons";
import { useLanguage } from "../context/LanguageContext";

const { Title } = Typography;
const { Meta } = Card;

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("projects.bloom.title"),
      description: t("projects.bloom.description"),
      image: "https://via.placeholder.com/300x200",
      tags: [
        t("projects.tag.branding"),
        t("projects.tag.typography"),
        t("projects.tag.print"),
      ],
      behanceLink: "https://behance.net",
      liveLink: "https://example.com",
    },
    {
      title: t("projects.nature.title"),
      description: t("projects.nature.description"),
      image: "https://via.placeholder.com/300x200",
      tags: [
        t("projects.tag.editorial"),
        t("projects.tag.layout"),
        t("projects.tag.typography"),
      ],
      behanceLink: "https://behance.net",
      liveLink: "https://example.com",
    },
    {
      title: t("projects.harmony.title"),
      description: t("projects.harmony.description"),
      image: "https://via.placeholder.com/300x200",
      tags: [
        t("projects.tag.ui"),
        t("projects.tag.app"),
        t("projects.tag.digital"),
      ],
      behanceLink: "https://behance.net",
      liveLink: "https://example.com",
    },
    {
      title: t("projects.fashion.title"),
      description: t("projects.fashion.description"),
      image: "https://via.placeholder.com/300x200",
      tags: [
        t("projects.tag.campaign"),
        t("projects.tag.photography"),
        t("projects.tag.digital"),
      ],
      behanceLink: "https://behance.net",
      liveLink: "https://example.com",
    },
  ];

  return (
    <div className="projects-container">
      <Title level={2} className="section-title">
        {t("projects.title")}
      </Title>

      <Row gutter={[24, 24]}>
        {projects.map((project, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card
              hoverable
              cover={<img alt={project.title} src={project.image} />}
              actions={[
                <Button
                  type="text"
                  icon={<BehanceOutlined />}
                  href={project.behanceLink}
                  target="_blank"
                >
                  {t("projects.behance")}
                </Button>,
                <Button
                  type="text"
                  icon={<LinkOutlined />}
                  href={project.liveLink}
                  target="_blank"
                >
                  {t("projects.preview")}
                </Button>,
              ]}
            >
              <Meta title={project.title} description={project.description} />
              <div style={{ marginTop: 16 }}>
                {project.tags.map((tag, idx) => (
                  <Tag key={idx} color="blue" style={{ marginBottom: 5 }}>
                    {tag}
                  </Tag>
                ))}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
