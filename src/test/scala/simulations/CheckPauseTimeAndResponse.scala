package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._

import scala.concurrent.duration.DurationInt

class CheckPauseTimeAndResponse extends Simulation {


  //http conf
  val httpconf = http.baseUrl("https://reqres.in")
    .header("Accept", "application/json")
    .header("content-type", "application/json")


  //scenario
  val scenar = scenario("user api calls")
    .exec(http("List all Users")
      .get("/api/user?page=2")
      .check(status.is(200)))
    .pause(5)

    .exec(http("single user api")
      .get("/api/users/2")
      .check(status.in(200 to 210)))
    .pause(1, 10)

    .exec(http("single user not found api")
      .get("/api/users/23")
      .check(status.not(400), status.not(500)))
    .pause(3000.milliseconds)

  //setup
  setUp(scenar.inject(atOnceUsers(1))).protocols(httpconf)


}
