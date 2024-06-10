import { useTranslation } from "react-i18next";
import { Card, Col, Row } from "antd";
const ExampleQuiz = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="layout">
      <Row gutter={16} >
          <Col span={8}>
          <a href={`/boxes-play`}>
            <Card title={t("greeting.title1")} bordered={false}>
              {t("greeting.desc1")}
            </Card>
            </a>
          </Col>
        <Col span={8}>
          <Card title={t("greeting.title2")} bordered={false}>
            {t("greeting.desc2")}
          </Card>
        </Col>
        <Col span={8}>
          <Card title={t("greeting.title3")} bordered={false}>
            {t("greeting.desc3")}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ExampleQuiz;
