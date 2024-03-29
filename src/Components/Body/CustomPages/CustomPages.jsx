import React from "react";
import SectionTitle from "../../Utils/SectionTitle/SectionTitle";
import NonButtonCard from "../../Utils/NonButtonCard/NonButtonCard";
import about1 from "../../../assets/images/card-images/about1.webp";
import about2 from "../../../assets/images/card-images/about2.webp";
import about3 from "../../../assets/images/card-images/about3.webp";
import service1 from "../../../assets/images/card-images/service1.webp";
import service2 from "../../../assets/images/card-images/service2.webp";
import service3 from "../../../assets/images/card-images/service3.webp";
import serviceSingle1 from "../../../assets/images/card-images/serviceSingle1.webp";
import serviceSingle2 from "../../../assets/images/card-images/serviceSingle2.webp";
import serviceSingle3 from "../../../assets/images/card-images/serviceSingle3.webp";
import projects1 from "../../../assets/images/card-images/projects1.webp";
import projects2 from "../../../assets/images/card-images/projects2.webp";
import projects3 from "../../../assets/images/card-images/projects3.webp";
import projectSingle1 from "../../../assets/images/card-images/projectSingle1.webp";
import projectSingle2 from "../../../assets/images/card-images/projectSingle2.webp";
import projectSingle3 from "../../../assets/images/card-images/projectSingle3.webp";
import faqs from "../../../assets/images/card-images/faqs.webp";
import gallery from "../../../assets/images/card-images/gallery.webp";
import portfolioSingle from "../../../assets/images/card-images/portfolioSingle.webp";
import contacts1 from "../../../assets/images/card-images/contacts1.webp";
import contacts2 from "../../../assets/images/card-images/contacts2.webp";
import contacts3 from "../../../assets/images/card-images/contacts3.webp";
import certifications from "../../../assets/images/card-images/certifications.webp";
import quote from "../../../assets/images/card-images/quote.webp";
import team from "../../../assets/images/card-images/team.webp";
import teamMember from "../../../assets/images/card-images/teamMember.webp";
import partners from "../../../assets/images/card-images/partners.webp";
import pricing from "../../../assets/images/card-images/pricing.webp";
import comingSoon from "../../../assets/images/card-images/comingSoon.webp";
import notFound from "../../../assets/images/card-images/404.webp";
import maintenance from "../../../assets/images/card-images/maintenance.webp";

function CustomPages() {
  const data = [
    {
      title: "معرفی 1",
      image: about1,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/about/",
    },
    {
      title: "معرفی 2",
      image: about2,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/about-v2/",
    },
    {
      title: "معرفی 3",
      image: about3,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/about-us-v3/",
    },
    {
      title: "خدمات 1",
      image: service1,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/services/",
    },
    {
      title: "خدمات 2",
      image: service2,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/services-v2/",
    },
    {
      title: "خدمات 3",
      image: service3,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/services-v3/",
    },
    {
      title: "خدمات تکی 1",
      image: serviceSingle1,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/services/construction-consultation/",
    },
    {
      title: "خدمات تکی 2",
      image: serviceSingle2,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/services/house-renovation/",
    },
    {
      title: "خدمات تکی 3",
      image: serviceSingle3,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/services/architecture-building/",
    },
    {
      title: "پروژه 1",
      image: projects1,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/projects-v1/",
    },
    {
      title: "پروژه 2",
      image: projects2,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/projects-v2/",
    },
    {
      title: "پروژه 3",
      image: projects3,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/projects-v3/",
    },
    {
      title: "پروژه تکی 1",
      image: projectSingle1,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/projects-v1/single-project-v1/",
    },
    {
      title: "پروژه تکی 2",
      image: projectSingle2,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/projects-v1/single-project-v2/",
    },
    {
      title: "پروژه تکی 3",
      image: projectSingle3,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/projects-v1/single-project-v3/",
    },
    {
      title: "سوالات متداول",
      image: faqs,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/faq/",
    },
    {
      title: "گالری",
      image: gallery,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/portfolio/",
    },
    {
      title: "پیش نمایش",
      image: portfolioSingle,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/preview-image/",
    },
    {
      title: "تماس با ما 1",
      image: contacts1,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/contact/",
    },
    {
      title: "تماس با ما 2",
      image: contacts2,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/contact-v2/",
    },
    {
      title: "تماس با ما 3",
      image: contacts3,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/contact-v3/",
    },
    {
      title: "گواهینامه ها",
      image: certifications,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/certifications-2/",
    },
    {
      title: "دریافت قیمت",
      image: quote,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/get-a-quote/",
    },
    {
      title: "تیم",
      image: team,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/team-2/",
    },
    {
      title: "اعضای تیم",
      image: teamMember,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/team-2/single-team/",
    },
    {
      title: "شرکای تجاری",
      image: partners,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/partners/",
    },
    {
      title: "قیمت گذاری",
      image: pricing,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/pricing-2/",
    },
    {
      title: "به زودی",
      image: comingSoon,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/coming-soon/",
    },
    {
      title: "404",
      image: notFound,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/error404",
    },
    {
      title: "نگهداری",
      image: maintenance,
      href: "https://ld-wp73.template-help.com/buildwall/v3/default/maintenance/",
    },
  ];
  return (
    <section id="custom-pages" className="w-full mt-20 flex-center flex-col">
      <SectionTitle number={30} title="صفحه سفارشی" description="عملکرد و تنوع بی نظیر بیلدوال را تجربه کنید" />
      <section className="max-w-[75rem] flex-center gap-6 flex-wrap">
        {data.map((item, index) => {
          return <NonButtonCard key={index} title={item.title} image={item.image} href={item.href} />;
        })}
      </section>
    </section>
  );
}

export default CustomPages;
