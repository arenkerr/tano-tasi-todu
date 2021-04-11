import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Moment from "react-moment";
import Layout from "../components/layout";
import Markdown from "react-markdown";

export const query = graphql`
  query PageQuery($slug: String!) {
    strapiPage(slug: {eq: $slug}) {
      hero {
        title
      }
      content {
        body
      }
      seo {
        metaTitle
        metaDescription
      }
    }
  }
`;

const Page = ({data}) => {
  const page = data.strapiPage;
  const seo = data.strapiPage.seo;
  console.log({data})
  return (
    <Layout seo={seo}>
        {/* <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
          data-src={article.image.publicURL}
          data-srcset={article.image.publicURL}
          data-uk-img
        > */}
      <div className="uk-container uk-container-large">
        <h1>{page.hero.title}</h1>
        <Markdown source={page.content.body} escapeHtml={false} />
      </div>
    </Layout>
  );
};

export default Page;
