package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt
import scala.language.postfixOps

class LoadSimulationBasic extends Simulation {


  //http conf
  val httpconf = http.proxy(Proxy("localhost", 8888))
    .baseUrl("https://gorest.co.in/")
    .header("Authorization", "Bearer 2052c2eb29d6b6bc531a3fa2f99ed7fb71ebb7d12667cac7828f01bedacde0d7")


  val csvFeeder = csv("./src/test/resources/data/getUserforload.csv").circular


  def getAUser() = {
    repeat(1) {
      feed(csvFeeder)
        .exec(http("Get Single User Request")
          .get("/public-api/users/${userid}")
          .check(jsonPath("$.data.name").is("${name}"))
          .check(status.in(200, 304)))
        .pause(2)
    }
  }


  val scn = scenario("Basic Load Simulation")
    .exec(getAUser())


  setUp(scn.inject(nothingFor(5),
    atOnceUsers(5),
    rampUsers(10) during (10 seconds)).protocols(httpconf))


}
