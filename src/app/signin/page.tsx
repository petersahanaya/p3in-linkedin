import Heading from "@components/heading/heading";
import Container from "@components/container/container";
import Spacing from "@components/spacing/spacing";
import P3In from "@icons/p3in/p3in";
import Link from "next/link";
import SignInForm from "@pages/signin/signin";

const SignIn = () => {
  return (
    <main className="h-screen w-screen">
      <Container className="h-max">
        <Spacing className="h-[11vh] justify-between">
          <Link href="/">
            <P3In />
          </Link>

          <Link
            href="/join"
            className="rounded-full border-[1px] border-blue-400 p-3 px-5 font-[600] text-primary transition-opacity hover:opacity-75"
          >
            Join Now
          </Link>
        </Spacing>

        <Heading className="mt-6 text-5xl font-[300] text-stone-700">
          Welcome to our professional community!
        </Heading>

        <SignInForm />
      </Container>
    </main>
  );
};

export default SignIn;
