import DefaultLayout from "@/components/default-layout";
import { Page } from "@/components/Page";
import { List } from "@telegram-apps/telegram-ui";

export default function Home() {
  return (
    <DefaultLayout>
      <Page
        back={false}>
        <List
          style={{
            paddingBottom: "75px"
          }}>
          helloo
        </List>
      </Page>
    </DefaultLayout>
  )
}
