import { OpenFeature, InMemoryProvider } from "@openfeature/server-sdk";

const myFlags = {
  showBanner: {
    variants: {
      on: true,
      off: false,
    },
    disabled: false,
    defaultVariant: "on",
  },
};

// Register your feature flag provider
// Note: we created a provider with some dummy data.
// But we can create a provider that talks to the real feature flag management tool.
await OpenFeature.setProviderAndWait(new InMemoryProvider(myFlags));

// Create a new client
const client = OpenFeature.getClient();

// Evaluate feature flag
const showBanner = await client.getBooleanValue("showBanner", false);

// showBanner evaluates to true since the defaultVariant is set to "on" and "on" is set to true
if (showBanner) {
  console.log("banner is visible");
}
