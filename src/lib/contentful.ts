import { createClient } from "contentful";

import { Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";
import { Collection } from 'contentful-management/dist/typings/entities/collection';

export interface IPostFields {
  title: string;
  slug: string;
  content: Document;
  fields: {
    [key: string]: any;
  };
  contentTypeId: 'post';
}

export interface IPost extends Entry<IPostFields> {
  sys: Collection & {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "post";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export const buildClient = () => {
  const client = createClient({
    space: process.env.CF_SPACE_ID || "",
    accessToken: process.env.CF_ACCESS_TOKEN || "",
  });
  return client;
};