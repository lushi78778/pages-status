import React from "react";
import { GithubOne, Home, Mail } from "@icon-park/react";
import CustomLink from "@/components/customLink";
import Package from "../../package.json";

const Footer = () => {
  // 加载配置
  const githubName = import.meta.env.VITE_GITHUB_NAME;
  const homeUrl = import.meta.env.VITE_HOME_URL;
  const emailUrl = import.meta.env.VITE_EMAIL_URL;
  const siteIcp = import.meta.env.VITE_SITE_ICP;
  const siteBeian = import.meta.env.VITE_SITE_BEIAN;
  const siteBeianUrl = import.meta.env.VITE_SITE_BEIAN_URL;

  return (
    <footer id="footer">
      <div className="social">
        <CustomLink
          iconDom={<GithubOne />}
          to={`https://github.com/${githubName}/`}
        />
        <CustomLink iconDom={<Home />} to={homeUrl} />
        <CustomLink iconDom={<Mail />} to={`mailto:${emailUrl}`} />
      </div>
      <div className="text">
        <p>
          <CustomLink
            text={Package.alia}
            to="https://github.com/imsyy/site-status"
          />
          &nbsp;Version&nbsp;{Package.version}
        </p>
        <p>
          基于&nbsp;
          <CustomLink to="https://uptimerobot.com/" text="UptimeRobot" />
          &nbsp;接口&nbsp;|&nbsp;检测频率 3 小时
        </p>
        <p>
          Copyright&nbsp;&copy;&nbsp;2023&nbsp;-&nbsp;{new Date().getFullYear()}
          &nbsp;
          {/* <CustomLink to="https://www.imsyy.top/" text="無名" /> */}
          {siteIcp ? (
            <React.Fragment>
              &nbsp;|&nbsp;
              <CustomLink to="https://beian.miit.gov.cn/" text={siteIcp} />
            </React.Fragment>
          ) : null}
          &nbsp;|&nbsp;
          <img src="https://beian.mps.gov.cn/img/logo01.dd7ff50e.png" height="18"></img>
          {siteBeian ? (
            <React.Fragment>
              <CustomLink to={siteBeianUrl} text={siteBeian} />
            </React.Fragment>
          ) : null}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
