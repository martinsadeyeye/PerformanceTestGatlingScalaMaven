package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._


class DataFeederCSV extends Simulation {


  //http conf
  val httpconf = http.baseUrl("https://gorest.co.in/")
    .header("Authorization", "Bearer 2052c2eb29d6b6bc531a3fa2f99ed7fb71ebb7d12667cac7828f01bedacde0d7")


  val csvFeeder = csv("./src/test/resources/data/getUser.csv").circular


  def getAUser() = {
    repeat(7) {
      feed(csvFeeder)
        .exec(http("Get Single User Request")
          .get("/public-api/users/${userid}")
          .check(jsonPath("$.data.name").is("${name}"))
          .check(status.in(200, 304)))
        .pause(2)
    }
  }


  val scn = scenario("CSV Feeder Test")
    .exec(getAUser())

  setUp(scn.inject(atOnceUsers(1))).protocols(httpconf)


}
