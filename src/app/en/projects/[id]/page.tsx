import { projectMetadata } from "@/app/_shared/projectPage";

export { default, generateStaticParams } from "@/app/_shared/projectPage";
export const generateMetadata = projectMetadata("en");

// 一覧にない slug は存在しない URL として global-not-found を表示する
export const dynamicParams = false;
