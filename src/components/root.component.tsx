import JSX, { BaseComponent, CustomElement } from "@nyaf/lib";
import "../link.css"

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
          style="display:flex; flex-direction:column; align-items:center; max-width:930px"
        >
          <div>
            <h1 style="text-align:center">
              Hello! <span role="img">👋🏻👨‍💻</span> My name is Pablo. I'm software developer and I'm in it for the technology <span role="img">👑</span>. I love the spanish tortilla <span role="img">💃</span>
            </h1>
          </div>
          <div
              n-on-mouseover={() =>
                  this.onMouseChangeColor({
                    atSign: "inherit",
                    domain: "inherit",
                    web: "inherit",
                    name: "inherit",
                  })
              }
              class="email__container"
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
                    class="email__link"
                >
                  <a
                      href="#about"
                      n-on-mouseover={() =>
                          this.onMouseChangeColor({ ...this.data.color, name: "red" })
                      }
                      style="
                    margin-block-start: 1em;
                    margin-block-end: 1em;
                "
                  >
                    Me
                  </a>
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
                      class="email__title"
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
                    // 19em is the height of text plus borders and 1px is for the size of the border
                    style="
                        height: calc( 19em + 1px );
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
                      class="email__title"
                  >
                    @
                  </h1>
                  <div
                      style="
                            border-bottom: 1px solid;
                            border-left: 1px solid;
                            height: 0.33333em;
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
                    class="email__link"
                >
                  <a
                      href="https://pablogarcor.com"
                      n-on-mouseover={() =>
                          this.onMouseChangeColor({
                            ...this.data.color,
                            web: "green",
                            domain: "green",
                          })
                      }
                      style="
                    margin-block-start: 1em;
                    margin-block-end: 1em;
                "
                  >
                    Web
                  </a>
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
                        class="email__title"
                    >
                      pablogarcor
                    </h1>
                    <div
                        style="
                                border-bottom: 1px solid;
                                border-right: 1px solid;
                                height: 0.33333em;
                            "
                    />
                    <div
                        class="email__link email__link-telegram"
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
                        class="email__title"
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
                height: 1em;
            "
            />
            <div
                class="email__link"
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
          <div
              id="about"
              style="
          padding:1em;
    border-radius: 1em;
    background: #E1F7F8;
    margin-top:4em;

          ">
            <h2>
              About me
            </h2>
            <p>
              I've been a techie since I was a kid, when I mounted my own custom PCs to play video games.</p>
            <p>
              In 2009 I begun developing software. I created a couple of automated bots to scrape the web.
              From that moment I begun taking jobs as a freelance as developer, creating apps from the backend to the frontend and everything in between.
              Little by little I learnt about networks, operative systems and how to code. Because of my wide knowledge I've been working in several startups.</p> <p>I couldn't choose a branch of software development,
              I like the whole stack.
            </p>
          </div>
        </div>
      </>
    );
  }
}
