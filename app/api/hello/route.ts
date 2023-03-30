export async function GET(request: Request) {
  // console.log("================")
  // console.log("am i in the client?", process.browser) // this can check if the component is client or server. then refresh the page that uses this component

  return new Response("Hello, Next.js!")
}
