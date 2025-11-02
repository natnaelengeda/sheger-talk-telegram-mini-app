import DefaultLayout from "@/components/default-layout";
import { Page } from "@/components/page";
import { List } from "@telegram-apps/telegram-ui";

export default function Home() {
  return (
    <DefaultLayout>
      <Page
        back={false}>
        <List
          style={{
            paddingBottom: "75px",
            color: "black"
          }}>
          <p>Hello</p>
        </List>
      </Page>
    </DefaultLayout>
  )
}
