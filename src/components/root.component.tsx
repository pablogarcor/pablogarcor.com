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
          style="display:flex; flex-direction:column; align-items:center; max-width:930px"
        >
          <div>
            <h1>
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
              style="display:flex;
                flex:1;
                width:fit-content;
                flex-direction:column;
                font-size: clamp( 0px, 0.75vw, 10px);
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
                    Yo
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
                    style="
                        display: flex;
                        justify-content: center;
                        height: 3em;
                        font-size: 2em;
                    "
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
                        className="email__title"
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
                height: 1em;
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
          <div style="
          padding:1em;
    border-radius: 1em;
    background: #E1F7F8;

          ">
            <h2>
              Sobre mi
            </h2>
            <p>
              Llevo enredado con la tecnología desde pequeño, cuando me dedicaba a montar mis propios PCs para jugar y ver como podía sacarles el mayor rendimiento posible.
              En los albores del 2009 empecé mi relación con el desarrollo de software, creando programas de automatización para scrappear la web.
              A partir de ahí llegaron mis primeros trabajos como desarrollador, creando aplicaciones desde cero, desde el back hasta el front, pasando por las BBDD.
              Poco a poco fui aprendiendo de sistemas y de gestión de redes y por mi versatilidad he trabajado en varias startups. Si tuviera que elegir una rama del desarrollo software,
              no podría, me interesa el stack completo y aunque sea en detrimento de especializarme completamente en un campo, a mi me merece la pena tener una visión total de todo.
            </p>
          </div>
        </div>
      </>
    );
  }
}
