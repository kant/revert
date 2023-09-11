<p align="center">
<img width="150" style="border-radius:75px;" src="./public/logo.png"/>
<h1 align="center"><b>Revert.dev</b></h1>
<p align="center">
 <h2 align="center">The open-source product integrations platform
 
 [![Star us on GitHub](https://img.shields.io/github/stars/revertinc/revert?color=FFD700&label=Stars&logo=Github)](https://github.com/revertinc/revert)
![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=revert-client-git-main-revertdev)  [![](https://dcbadge.vercel.app/api/server/q5K5cRhymW?style=flat)](https://discord.gg/q5K5cRhymW) [![twitter](https://img.shields.io/twitter/follow/Revertdotdev?style=social)](https://twitter.com/intent/follow?screen_name=RevertdotDev) [![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://docs.revert.dev/) <a href="https://github.com/revertinc/revert/pulse"><img src="https://img.shields.io/github/commit-activity/m/revertinc/revert" alt="Commits-per-month"></a>
</h2>

[Get started](https://revert.dev) · [Docs](https://docs.revert.dev/) · [Issues](https://github.com/revertinc/revert/issues) · [Discord](https://discord.gg/q5K5cRhymW) · [Get in touch](mailto:team@revert.dev)

</p>

### ⭐ About Revert

Revert makes it incredibly easy to build integrations with any third party API such as

-   Go-to-market tools like CRMs (Salesforce, Hubspot).
-   Communication tools (Slack, MS Teams)
-   Ticketing tools like (Jira, Asana)

### 📺 Demo

<a href="http://www.youtube.com/watch?feature=player_embedded&v=1aXXx66LKnY
" target="_blank">
<img src="https://res.cloudinary.com/dfcnic8wq/image/upload/v1694089822/Revert/Screenshot_2023-09-07_at_6.00.00_PM_xz7edr.png" 
alt="Revert Quick demo"  border="2"/>
<em>Revert Quick demo</em>
</a>

### Why Revert?

You might want to check us out if

-   You are developer building a B2B product
-   You have a ton of integrations on your roadmap
-   Your focus is building your core product
-   You want to move fast and not break things

[Sign up](https://revert.dev) for an account or read our docs [here](https://docs.revert.dev) !

### 🚀 What makes us faster and reliable.

-   **Seamless Integration**: Revert has pre-configured apps on all these platforms so you don't have to create them and deal with nuances on each platform.
-   **Graceful Failure Handling**: Ensures smooth handling of expired permissions by customers, preventing any service disruptions.
-   **Automatic OAuth Token Refresh**: OAuth tokens are automatically refreshed, ensuring continuous API functionality.
-   **API Retry Mechanism**: Revert automatically retries failed API calls, improving reliability and minimizing potential issues.
-   **SDKs for Popular Frameworks**: Ready-to-use SDKs available for React, Vue, and Angular, enabling quick and easy integration.
-   **Self-Hosted**: Provides the flexibility to self-host the integration solution, giving you full control over deployment and data.

## Roadmap

CRMs:

-   [x] **Salesforce**
-   [x] **Hubspot**

-   [x] **Zoho CRM**

-   [x] **Pipedrive**
-   [ ] Other CRMs such as Close.io, Zendesk Sell, MS 365

Communication tools:

-   [ ] Slack
-   [ ] Microsoft Teams

Accounting software:

-   [ ] Xero
-   [ ] Quickbooks

...[and more](https://github.com/revertinc/revert/issues?q=is%3Aissue+is%3Aopen+label%3AIntegration)

-   [ ] Ability to self-host Revert inside your own cloud
-   [ ] SOC 2

Feel free to create an issue if you'd like an integration we're missing [here](https://github.com/revertinc/revert)

## Packages

This repo contains a set of packages under `@reverdotdev/` namespace such as:

-   [`@revertdotdev/backend`](./packages/backend): The core Revert API that powers the frontend SDKs.
-   [`@revertdotdev/revert-react`](./packages/react): Official SDK for React.
-   [`@revertdotdev/revert-vue`](./packages/vue): Official SDK for Vue.
-   [`@revertdotdev/js`](./packages/js): Official SDK for Javascript.
-   ...

### Quickstart

#### Spinning up Revert with docker-compose

The easiest way to start Revert is to run it via docker-compose:

```shell
# Get the code
git clone --depth 1 https://github.com/revertinc/revert

# Copy the example env file
cp .env.example .env

# Update this .env file with your own secrets

# Then In the root directory run
docker-compose up -d
```

The UI is now available at http://localhost:3000 and the backend is available at http://localhost:4001.

## Examples

The repo [`revert-example-apps`](https://github.com/revertinc/revert-example-apps) contains a set of examples how to use revert with different frameworks.

## 📞 Support

In case of questions/feedback, you can get in touch in the following ways

-   Open a Github support issue
-   Contact us at [email](mailto:team@revert.dev)
-   Ask a question in our [discord](https://discord.gg/q5K5cRhymW)
-   If you'd like you can book a call with our team below

<a href="https://cal.com/jatinsandilya/chat-with-jatin-from-revert?utm_source=banner&utm_campaign=oss"><img alt="Book us with Cal.com" src="https://cal.com/book-with-cal-dark.svg" /></a>

## 💪 Contributors

Thankful to the community for making Revert better every day ❤️

<a href="https://github.com/revertinc/revert/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=revertinc/revert" />
</a>
