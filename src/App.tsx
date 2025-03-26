import { Layout, ConfigProvider, theme } from "antd";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import AnimationObserver from "./components/AnimationObserver";
import { LanguageProvider, useLanguage } from "./context/LanguageContext"; // Add this import

const { Header, Content, Footer } = Layout;

// Create a FooterContent component to use the translation context
const FooterContent = () => {
  const { t } = useLanguage();
  return (
    <>
      {t("footer.text").replace("{year}", new Date().getFullYear().toString())}
    </>
  );
};

function App() {
  return (
    <LanguageProvider>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm, // Use dark theme algorithm
          token: {
            colorPrimary: "#9D4EDD", // A rich purple color
            borderRadius: 6,
            colorBgBase: "#121212", // Very dark background (almost black)
            colorTextBase: "#ffffff", // White text
            colorLink: "#BB86FC", // Lighter purple for links
            colorBgContainer: "#1E1E1E", // Dark containers
          },
          components: {
            Card: {
              colorBorderSecondary: "#333333",
              boxShadow: "0 4px 12px rgba(157, 78, 221, 0.2)",
            },
            Button: {
              colorPrimaryHover: "#BB86FC", // Lighter purple on hover
            },
          },
        }}
      >
        <Layout className="layout">
          <Header
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              width: "100%",
              padding: 0,
            }}
          >
            <Navbar />
          </Header>
          <Content>
            <div id="home">
              <Home />
            </div>
            <div id="about" className="section">
              <AboutMe />
            </div>
            <div id="skills" className="section">
              <Skills />
            </div>
            <div id="projects" className="section">
              <Projects />
            </div>
            <div id="experience" className="section">
              <Experience />
            </div>
            <div id="education" className="section">
              <Education />
            </div>
          </Content>
          <Footer style={{ textAlign: "center", width: "100%" }}>
            <FooterContent />
          </Footer>
          <AnimationObserver />
        </Layout>
      </ConfigProvider>
    </LanguageProvider>
  );
}

export default App;
