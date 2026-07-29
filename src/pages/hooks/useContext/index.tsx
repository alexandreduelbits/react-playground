import { Tabs } from "../../../components/Tabs";

export function UseContext() {
  return (
    <section>
      <h1>useContext</h1>

      <p>
        Context is useful when you want to share a value between child
        components without passing props down manually at every level.
      </p>

      <p>As you interact with the tabs, the content will update accordingly.</p>

      <Tabs.Root activeTab="tab1">
        <Tabs.List>
          <Tabs.Item label="Tab 1" value="tab1" />
          <Tabs.Item label="Tab 2" value="tab2" />
        </Tabs.List>

        <Tabs.Content value="tab1">
          <p>Content for Tab 1</p>
        </Tabs.Content>

        <Tabs.Content value="tab2">
          <p>Content for Tab 2</p>
        </Tabs.Content>
      </Tabs.Root>

      <p>The next example does not affect the context of the previous tabs.</p>

      <Tabs.Root activeTab="tab1">
        <Tabs.List>
          <Tabs.Item label="Tab 1" value="tab1" />
          <Tabs.Item label="Tab 2" value="tab2" />
        </Tabs.List>

        <Tabs.Content value="tab1">
          <p>Content for Tab 1</p>
        </Tabs.Content>

        <Tabs.Content value="tab2">
          <p>Content for Tab 2</p>
        </Tabs.Content>
      </Tabs.Root>
    </section>
  );
}

UseContext.displayName = "UseContext";
