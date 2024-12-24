import { MetaProps } from "@/types/global";
import Head from "next/head";

const Meta: React.FC<MetaProps> = ({
  title,
  description = "Default description",
  keywords = "nextjs, web development",
  author = "Your Name",
  robots = "index, follow",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
    </Head>
  );
};

export default Meta;
