import { Select, Space } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./buttonlang.scss";

const Buttonlang = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<string>("en");

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
    setLang(value);
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <div className="langbtn">
      <Space wrap>
        <Select
          defaultValue="EN"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "en", label: "EN" },
            { value: "th", label: "TH" },
          ]}
        />
      </Space>
    </div>
  );
};

export default Buttonlang;
