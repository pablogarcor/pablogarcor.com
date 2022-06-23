import JSX, { BaseComponent, CustomElement } from "@nyaf/lib";

@CustomElement("app-root")
export class RootComponent extends BaseComponent<{
  color: {
    atSign: string;
    domain: string;
    web: string;
    name: string;
  };
}> {
  constructor() {
    super();
    this.setData("color", {
      atSign: "inherit",
      domain: "inherit",
      web: "inherit",
      name: "inherit",
    });
  }
  onMouseChangeColor(color: {
    atSign: string;
    domain: string;
    web: string;
    name: string;
  }) {
    this.setData("color", color);
  }
  render() {
    return (
      <>
        <div
          n-on-mouseover={() =>
            this.onMouseChangeColor({
              atSign: "inherit",
              domain: "inherit",
              web: "inherit",
              name: "inherit",
            })
          }
          style="display:flex;
                flex:1;
                width:fit-content;
                flex-direction:column;
                font-size: clamp( 0px, 0.75vw, 20px);
            "
        >
          <div style="display: flex;">
            <div
              style="
                    display: flex;
                    flex-direction: column;
                    width: fit-content;
                "
            >
              <div
                style="
                        display: flex;
                        justify-content: center;
                        height: 3em;
                        font-size: 2em;
                    "
              >
                <p
                  n-on-mouseover={() =>
                    this.onMouseChangeColor({ ...this.data.color, name: "red" })
                  }
                  style="
                            cursor: pointer;
                        "
                >
                  Yo
                </p>
              </div>
              <div
                style="
                        border-top: 1px solid;
                        border-left: 1px solid;
                        border-right: 1px solid;
                        height: 1em;
                    "
              />
              <div
                style="
                        line-height: 1.15;
                        font-size: 3em;
                        width: fit-content;
                    "
              >
                <h1
                  style={"color:" + this.data.color.name + ";"}
                  className="email__title"
                >
                  pablo
                </h1>
              </div>
            </div>
            <div
              style="
                    display: flex;
                    flex-direction: column;
                    width: fit-content;
                "
            >
              <div
                // 7em is the height of text plus borders and 1px is for the size of the border
                style="
                        height: calc( 7em + 1px );
                    "
              />
              <div
                style="
                        line-height: 1.15;
                        font-size: 3em;
                        width: fit-content;
                    "
              >
                <h1
                  style={"color:" + this.data.color.atSign + ";"}
                  className="email__title"
                >
                  @
                </h1>
                <div
                  style="
                            border-bottom: 1px solid;
                            border-left: 1px solid;
                            height: 0.5em;
                        "
                />
              </div>
            </div>
            <div
              style="
                    display: flex;
                    flex-direction: column;
                    width: fit-content;
                "
            >
              <div
                style="
                        display: flex;
                        justify-content: center;
                        height: 3em;
                        font-size: 2em;
                    "
              >
                <p
                  n-on-mouseover={() =>
                    this.onMouseChangeColor({
                      ...this.data.color,
                      web: "green",
                      domain: "green",
                    })
                  }
                  style="
                            cursor: pointer;
                            "
                >
                  Web
                </p>
              </div>
              <div
                style="
                        border-top: 1px solid;
                        border-left: 1px solid;
                        border-right: 1px solid;
                        height: 1em;
                    "
              />
              <div
                style="
                        display: flex;
                        width: fit-content;
                    "
              >
                <div
                  style="
                            line-height: 1.15;
                            font-size: 3em;
                            width: fit-content;
                        "
                >
                  <h1
                    style={"color:" + this.data.color.web + ";"}
                    className="email__title"
                  >
                    pablogarcor
                  </h1>
                  <div
                    style="
                                border-bottom: 1px solid;
                                border-right: 1px solid;
                                height: 0.5em;
                            "
                  />
                  <div
                    style="
                                font-size: 0.66666em;
                                display: flex;
                                justify-content: center;
                                height: 3em;
                            "
                  >
                    <a
                      href="https://t.me/pablogarcor"
                      target="_blank"
                      rel="noreferrer"
                      n-on-mouseover={() =>
                        this.onMouseChangeColor({
                          ...this.data.color,
                          web: "#229ed9",
                          atSign: "#229ed9",
                        })
                      }
                      style="
                                    margin-block-start: 1em;
                                    margin-block-end: 1em;
                                "
                    >
                      Telegram
                    </a>
                  </div>
                </div>
                <div
                  style="
                            line-height: 1.15;
                            font-size: 3em;
                            width: fit-content;
                        "
                >
                  <h1
                    style={"color:" + this.data.color.domain + ";"}
                    className="email__title"
                  >
                    .com
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div
            style="
                border-bottom: 1px solid;
                border-left: 1px solid;
                border-right: 1px solid;
                height: 0.5em;
            "
          />
          <div
            style="
                display: flex;
                justify-content: center;
                height: 3em;
                font-size: 2em;
            "
          >
            <a
              href="mailto: pablo@pablogarcor.com"
              n-on-mouseover={() =>
                this.onMouseChangeColor({
                  ...this.data.color,
                  web: "orange",
                  atSign: "orange",
                  name: "orange",
                  domain: "orange",
                })
              }
              style="
                    margin-block-start: 1em;
                    margin-block-end: 1em;
                "
            >
              Email
            </a>
          </div>
        </div>
      </>
    );
  }
}
