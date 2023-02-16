import {css} from "@emotion/react";
/** @jsxImportSource @emotion/react */

const homeContainer = css`
  margin: 0;
  padding: 0 12px;
  background-color: snow;
`
const midashi = css`
  border-left: 3px solid greenyellow;
  background-color: oldlace;
  cursor: pointer;
  width: fit-content;
`

const midasiLink = css`
        text-decoration: none;
        &:visited{
                color: inherit;
        }
`

export const Product = () => {
    return(
        <div css={homeContainer}>
            <h2 css={midashi}><a href="https://github.com/Mamizu0312/SimpleSpawn" css={midasiLink} target="_blank">SimpleSpawn</a></h2>
            使用言語:Java<br/>
            Minecraftのプラグインです。/setspawnコマンドでspawnpointを設定して、/spawnコマンドで<br/>
            飛べます。五年ぐらい更新してないので最新版じゃ動かないです。対応バージョン1.13とか?<br/>
            <h2 css={midashi}><a href="https://github.com/Mamizu0312/DropProbability" css={midasiLink} target="_blank">DropProbability</a></h2>
            使用言語:Java<br/>
            Minecraftのプラグインです。これが一番最近作ったやつです。<br/>
            ブロック破壊時のドロップ率を調整できるプラグインです。対応バージョンは多分1.18.2ぐらいです<br/>
            <h2 css={midashi}><a href="https://github.com/Mamizu0312/TCPChat" css={midasiLink} target="_blank">TCPChat</a></h2>
            使用言語:Python<br/>
            CUIのプログラムです。TCPです。クライアントサーバ方式です。<br/>
            最低限の機能しかついてない上に作りかけのままなので産廃です。<br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}