import Layout from "../components/Layout"
import BasicMeta from "../components/meta/BasicMeta"
import OpenGraphMeta from "../components/meta/OpenGraphMeta"
import TwitterCardMeta from "../components/meta/TwitterCardMeta"
import About from "../components/About"

export default function AboutPage() {
  return (
    <Layout>
      <BasicMeta url={"/about"} />
      <OpenGraphMeta url={"/about"} />
      <TwitterCardMeta url={"/about"} />
      <About />
    </Layout>
  )
}
