import { useState } from "react";
import { Menu, Button, Drawer, Switch, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "../styles/Navbar.css";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState("home");
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { key: "home", label: t("nav.home") },
    { key: "about", label: t("nav.about") },
    { key: "skills", label: t("nav.skills") },
    { key: "projects", label: t("nav.projects") },
    { key: "experience", label: t("nav.experience") },
    { key: "education", label: t("nav.education") },
  ];

  const handleClick = (e: any) => {
    const element = document.getElementById(e.key);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setCurrent(e.key);
    }
    setVisible(false);
  };

  const toggleLanguage = (checked: boolean) => {
    setLanguage(checked ? "es" : "en");
  };

  return (
    <div className="navbar">
      <div className="logo">Sofia Costacaro</div>

      {/* Desktop Navigation */}
      <div className="desktop-menu">
        <div className="menu-container">
          <Menu
            mode="horizontal"
            theme="dark"
            selectedKeys={[current]}
            items={menuItems}
            onClick={handleClick}
            className="nav-menu"
          />
          <div className="language-toggle">
            <Switch
              checkedChildren="ES"
              unCheckedChildren="EN"
              checked={language === "es"}
              onChange={toggleLanguage}
              className="lang-switch"
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="mobile-menu">
        <Space>
          <div className="language-toggle-mobile">
            <Switch
              checkedChildren="ES"
              unCheckedChildren="EN"
              checked={language === "es"}
              onChange={toggleLanguage}
              className="lang-switch"
            />
          </div>
          <Button
            type="primary"
            icon={<MenuOutlined />}
            onClick={() => setVisible(true)}
          />
        </Space>
        <Drawer
          title="Menu"
          placement="right"
          onClose={() => setVisible(false)}
          open={visible}
        >
          <Menu
            mode="vertical"
            items={menuItems}
            onClick={handleClick}
            selectedKeys={[current]}
          />
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
