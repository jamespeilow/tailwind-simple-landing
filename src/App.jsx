import "./App.css";
import { FiftyFifty } from "./components/fiftyFifty/FiftyFifty";
import { Header } from "./components/header/Header";
import { Section } from "./components/section/Section";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <Section>
          <FiftyFifty
            subtitle="DIGITAL PRODUCTS"
            title="Sell online courses, coaching sessions, webinars, workshops, ebooks,
            and anything you can think of on Podia"
            description="Get everything you need in one place that you own. Podia takes care of
            hosting products, taking payments, and getting products to your
            customers. And you always control your own work."
            cta={{ text: "Get your free account", href: "/", type: "button" }}
            image="https://images.ctfassets.net/19dvw6heztyg/3xU9z3jUaXTRdC0ii7hXVb/2ac68a4e2bab8ea98b76e001daf345af/digital_products-hero.png?w=1440&q=75"
            hero
          />
        </Section>

        <Section>
          <FiftyFifty
            subtitle="Online Courses"
            title="Beautiful online courses you can build in moments"
            description="Make a beautiful online course for your customers. Podia hosts your course. That means all the lessons, files, and videos you want handled for you."
            cta={{ text: "Learn more about courses", href: "/", type: "text" }}
            image="https://images.ctfassets.net/19dvw6heztyg/6Upd6xYyofNMlYawCQm7OA/1c2d7c3b665bb2dda455db43da72762a/digital_products-courses.png?w=1440&q=75"
          />
        </Section>

        <Section>
          <FiftyFifty
            subtitle="Digital Downloads"
            title="Ebooks, templates, and any file type you can think of"
            description="Have an ebook to sell? Templates you love? Podia makes it easy to spin up a sales page and sell ebooks, templates, audio files, video files, spreadsheets, and any other file type."
            cta={{
              text: "Learn more about downloads",
              href: "/",
              type: "text",
            }}
            image="https://images.ctfassets.net/19dvw6heztyg/7p6JX5lRphfQnMNrsU1OuP/1c5e24ecb26ce3440fc87034242f0a27/digital_products-downloads.png?w=1440&q=75"
          />
        </Section>

        <Section>
          <FiftyFifty
            subtitle="Coaching"
            title="One-on-one coaching and consultations, with billing managed for you"
            description="Sometimes your students want one-on-one attention. Podia makes it easy for you to charge for coaching sessions and consultations."
            cta={{ text: "Learn more about coaching", href: "/", type: "text" }}
            image="https://images.ctfassets.net/19dvw6heztyg/6MRIUMFs5dX9PKOjtzMXjf/9f5b01182904ffc6c4663dc2f442c3ba/digital_products-coaching.png?w=1440&q=75"
          />
        </Section>

        <Section>
          <FiftyFifty
            subtitle="Webinars"
            title="Webinars and workshops with registration and payment in one place"
            description="How can you charge for your webinars and workshops? Do it from your Podia site. Set up a paid webinar product and your customers can register straight from your website."
            cta={{ text: "Learn more about webinars", href: "/", type: "text" }}
            image="https://images.ctfassets.net/19dvw6heztyg/5LepYwomTxpDT9PU2CoeHo/0aec7f94e534ac062df48c7e7f4c7f51/digital_products-webinars.png?w=1440&q=75"
          />
        </Section>
      </div>
    </>
  );
}

export default App;
