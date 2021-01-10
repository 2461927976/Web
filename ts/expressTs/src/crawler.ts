/*
 * @Author: zzj
 * @Date: 2020-12-11 22:04:34
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-17 14:09:18
 * @Description:
 */
import fs from "fs";
import path from "path";
import superagent from "superagent";
import Jianshu from "./jianshu";

export interface Analyzer {
  analyze: (html: string, filePath: string) => string;
}

class Crawler {
  private filePath = path.resolve(__dirname, "../data/blog.json");

  private async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }

  private writeFile(content: string) {
    fs.writeFileSync(this.filePath, content);
  }

  private async initSpiderProcess() {
    const html = await this.getRawHtml();
    const fileContent = this.analyzer.analyze(html, this.filePath);
    this.writeFile(fileContent);
  }

  constructor(private url: string, private analyzer: Analyzer) {
    this.initSpiderProcess();
  }
}

const url = "https://www.jianshu.com/";

// const jianshu = new Jianshu();
const jianshu = Jianshu.getInstance();
new Crawler(url, jianshu);
