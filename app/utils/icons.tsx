import React from "react";
import { Icon } from "@iconify-icon/react"

const size = 32;

const ICONS: Record<string, React.ReactNode> = {
  "c#": <Icon icon="devicon:csharp" width={size} height={size} />,
  android_sdk: <Icon icon="devicon:androidstudio" width={size} height={size}  />,
  java: <Icon icon="devicon:java" width={size} height={size}/>,
  javascript: <Icon icon="logos:javascript" width={size} height={size} />,
  unity_game_engine: <Icon icon="devicon:unity" width={size} height={size}  />,
  arduino: <Icon icon="devicon:arduino" width={size} height={size}  />,
  "amazon_web_services": <Icon icon="logos:aws"            width={size} height={size} />,
  python:         <Icon icon="logos:python"         width={size} height={size}  />,
  react:          <Icon icon="logos:react"          width={size} height={size}  />,
  typescript:     <Icon icon="logos:typescript-icon" width={size} height={size} />,
  nodejs:         <Icon icon="logos:nodejs-icon"    width={size} height={size}  />,
  nextjs:         <Icon icon="logos:nextjs-icon"    width={size} height={size}  />,
  tailwindcss:    <Icon icon="logos:tailwindcss-icon" width={size} height={size}  />,
  default:        <Icon icon="mdi:help-circle-outline" width={size} height={size}  />
};


export function getIconElement(toolName: string): React.ReactNode {
  const toolQuery = toolName
    .toLowerCase()
    .replaceAll(" ", "_");

  return (
    <div key={crypto.randomUUID()} className="tooltip" data-tip={toolName}>
      {ICONS[toolQuery] ?? (
        <Icon icon="emojione:warning" width="24" height="24" />
      )}
    </div>
  );
}