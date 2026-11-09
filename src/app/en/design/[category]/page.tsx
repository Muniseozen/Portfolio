import { designMetadata } from "@/app/_shared/designPage";

export { default, generateStaticParams } from "@/app/_shared/designPage";
export const generateMetadata = designMetadata("en");

// 一覧にない slug は存在しない URL として global-not-found を表示する
export const dynamicParams = false;
