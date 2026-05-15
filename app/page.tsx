"use client";

import {
  Bath,
  CalendarCheck,
  Camera,
  CarFront,
  Check,
  Clock3,
  HeartPulse,
  MapPin,
  PawPrint,
  Phone,
  Scissors,
  Send,
  ShieldCheck,
  Sparkles,
  WalletCards
} from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";

const services = [
  {
    icon: Bath,
    title: "精细沐浴",
    text: "低敏香波、耳眼清洁、足底修护、肛门腺护理，适合日常清洁和换季护理。"
  },
  {
    icon: Sparkles,
    title: "毛发养护",
    text: "针对打结、掉毛、静电和毛躁问题，搭配护毛素与手工梳理恢复蓬松度。"
  },
  {
    icon: Scissors,
    title: "美容造型",
    text: "泰迪装、比熊圆头、博美修型、猫咪轻剪，按品种体态和主人偏好定制造型。"
  },
  {
    icon: CarFront,
    title: "接送服务",
    text: "同城预约接送，独立航空箱消毒，实时同步到店、洗护、返程状态。"
  }
];

const stats = [
  ["12k+", "累计服务宠物"],
  ["4.9", "客户平均评分"],
  ["30min", "同城接送响应"],
  ["1v1", "专属美容师护理"]
];

const features = [
  {
    icon: ShieldCheck,
    title: "猫狗分区与工具消毒",
    text: "独立操作台、毛巾与梳具分类管理，每次服务后完成消毒记录。"
  },
  {
    icon: HeartPulse,
    title: "皮肤毛发预检",
    text: "洗前观察红疹、结痂、耳道异味和毛结情况，必要时建议先就医。"
  },
  {
    icon: Camera,
    title: "洗护进度反馈",
    text: "关键节点发送照片，完成后附带毛发、皮肤和居家梳理建议。"
  }
];

const packages = [
  {
    title: "基础净护",
    intro: "适合短毛或日常清洁",
    price: "¥88",
    time: "约 60-90 分钟",
    items: ["低敏沐浴清洁", "耳眼、足底、指甲护理", "基础吹干与顺毛"]
  },
  {
    title: "精致洗护",
    intro: "高频推荐，兼顾清洁和护理",
    price: "¥158",
    time: "约 90-120 分钟",
    items: ["基础净护全套项目", "护毛素与手工梳理", "皮肤状态反馈报告"],
    highlight: true
  },
  {
    title: "造型护理",
    intro: "适合需要修剪和造型的宠物",
    price: "¥238",
    time: "约 120-180 分钟",
    items: ["精致洗护全套项目", "品种造型或局部修剪", "完成照与护理建议"]
  }
];

const steps = [
  ["填写预约", "选择宠物类型、体型和希望到店时间，工作人员确认档期。"],
  ["到店预检", "美容师检查毛结、皮肤和情绪状态，确定护理方案。"],
  ["专属洗护", "按宠物耐受度控制节奏，关键节点同步进度照片。"],
  ["接回反馈", "交付护理记录、造型照片和下一次洗护建议周期。"]
];

export default function Home() {
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<{ phone?: string }>({});

  function validate(data: Record<string, FormDataEntryValue>): { phone?: string } {
    const errs: { phone?: string } = {};
    const phone = (data.phone as string).trim();
    if (!/^1\d{10}$/.test(phone)) {
      errs.phone = "请输入正确的 11 位手机号码";
    }
    return errs;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setStatus("预约信息已记录，我们会尽快联系确认。");
    event.currentTarget.reset();
  }

  return (
    <div className="page-shell">
      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="#home" aria-label="泡泡爪宠物洗护首页">
            <span className="brand-mark">
              <PawPrint aria-hidden="true" />
            </span>
            <span>泡泡爪宠物洗护</span>
          </a>
          <nav className="nav-links" aria-label="主要导航">
            <a href="#services">洗护服务</a>
            <a href="#care">安心护理</a>
            <a href="#prices">套餐价格</a>
            <a href="#booking">预约到店</a>
          </nav>
          <a className="btn" href="#booking">
            <CalendarCheck aria-hidden="true" />
            立即预约
          </a>
        </div>
      </header>

      <main id="home">
        <section className="hero" aria-label="宠物洗护首屏">
          <div className="hero-content">
            <div className="eyebrow">门店洗护 · 上门接送 · 猫狗分区</div>
            <h1>让每一次洗护，都像一次温柔假期</h1>
            <p>
              专业美容师一对一评估毛发与皮肤状态，使用低敏清洁产品、独立烘干舱和透明护理流程，让宠物干净、蓬松，也更安心。
            </p>
            <div className="hero-actions">
              <a className="btn" href="#booking">
                <Scissors aria-hidden="true" />
                预约洗护
              </a>
              <a className="btn secondary" href="#prices">
                <WalletCards aria-hidden="true" />
                查看套餐
              </a>
            </div>
          </div>
        </section>

        <div className="hero-stats" aria-label="门店数据">
          {stats.map(([value, label]) => (
            <div className="stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <section id="services">
          <div className="section-inner">
            <div className="section-head">
              <p className="kicker">SERVICE MENU</p>
              <h2>从基础清洁到造型护理，一站式照顾毛孩子</h2>
              <p>每个项目都会先做身体状态观察，避开皮肤敏感区，护理完成后提供照片反馈和居家护理建议。</p>
            </div>

            <div className="service-grid">
              {services.map(({ icon: Icon, title, text }) => (
                <article className="service-card" key={title}>
                  <div className="icon-box">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="care">
          <div className="section-inner split">
            <div className="photo-stack">
              <img
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=85"
                alt="美容师正在为宠物梳理毛发"
              />
              <img
                src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=700&q=85"
                alt="洗护后干净放松的狗狗"
              />
            </div>
            <div>
              <div className="section-head">
                <p className="kicker">SAFE CARE</p>
                <h2>护理过程透明，敏感宠物也能慢慢放松</h2>
                <p>我们把洗护拆成可观察、可沟通、可追踪的流程，减少宠物紧张，也让主人知道每一步发生了什么。</p>
              </div>
              <div className="feature-list">
                {features.map(({ icon: Icon, title, text }) => (
                  <div className="feature" key={title}>
                    <div className="icon-box">
                      <Icon aria-hidden="true" />
                    </div>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="prices" id="prices">
          <div className="section-inner">
            <div className="section-head center">
              <p className="kicker">PACKAGE</p>
              <h2>清晰套餐，按体型和毛量灵活调整</h2>
              <p>以下为基础价格，长毛、严重打结、特殊造型会在服务前确认费用。</p>
            </div>
            <div className="price-grid">
              {packages.map((item) => (
                <article className={`price-card${item.highlight ? " highlight" : ""}`} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.intro}</p>
                  <div className="price">
                    {item.price} <small>起</small>
                  </div>
                  <span className="price-note">{item.time}</span>
                  <ul>
                    {item.items.map((line) => (
                      <li key={line}>
                        <Check aria-hidden="true" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="section-inner">
            <div className="section-head">
              <p className="kicker">PROCESS</p>
              <h2>预约到接回，只需要四步</h2>
            </div>
            <div className="steps">
              {steps.map(([title, text], index) => (
                <article className="step" key={title}>
                  <div className="step-number">{index + 1}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="booking" id="booking">
          <div className="section-inner booking-panel">
            <div className="contact-card">
              <p className="kicker">BOOKING</p>
              <h2>预约今天的清爽时刻</h2>
              <p>提交后我们会在营业时间内联系确认。页面为静态演示，按钮会在本页给出提交提示。</p>

              <div className="contact-line">
                <div className="icon-box">
                  <MapPin aria-hidden="true" />
                </div>
                <div>
                  <strong>门店地址</strong>
                  <span>上海市徐汇区梧桐路 88 号 1F</span>
                </div>
              </div>
              <div className="contact-line">
                <div className="icon-box">
                  <Clock3 aria-hidden="true" />
                </div>
                <div>
                  <strong>营业时间</strong>
                  <span>周一至周日 10:00 - 20:00</span>
                </div>
              </div>
              <div className="contact-line">
                <div className="icon-box">
                  <Phone aria-hidden="true" />
                </div>
                <div>
                  <strong>预约电话</strong>
                  <span>021-6688-2026</span>
                </div>
              </div>
            </div>

            <form id="bookingForm" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">主人姓名</label>
                <input id="name" name="name" type="text" placeholder="请输入姓名" required />
              </div>
              <div className="field">
                <label htmlFor="phone">联系电话</label>
                <input id="phone" name="phone" type="tel" placeholder="请输入手机号" required />
                {errors.phone && <span className="field-error" role="alert">{errors.phone}</span>}
              </div>
              <div className="field">
                <label htmlFor="pet">宠物类型</label>
                <select id="pet" name="pet">
                  <option>小型犬</option>
                  <option>中大型犬</option>
                  <option>猫咪</option>
                  <option>其他宠物</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="service">服务套餐</label>
                <select id="service" name="service">
                  <option>基础净护</option>
                  <option>精致洗护</option>
                  <option>造型护理</option>
                  <option>接送服务</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="date">期望日期</label>
                <input id="date" name="date" type="date" />
              </div>
              <div className="field">
                <label htmlFor="time">期望时间</label>
                <select id="time" name="time">
                  <option>10:00 - 12:00</option>
                  <option>12:00 - 14:00</option>
                  <option>14:00 - 16:00</option>
                  <option>16:00 - 18:00</option>
                  <option>18:00 - 20:00</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="message">宠物情况</label>
                <textarea id="message" name="message" placeholder="例如：怕吹风、毛结多、皮肤敏感、需要接送" />
              </div>
              <div className="form-actions">
                <span className="form-status" id="formStatus" role="status" aria-live="polite">
                  {status}
                </span>
                <button className="btn" type="submit">
                  <Send aria-hidden="true" />
                  提交预约
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <span>© 2026 泡泡爪宠物洗护</span>
          <span>专业洗护 · 温柔陪伴 · 透明反馈</span>
        </div>
      </footer>
    </div>
  );
}
