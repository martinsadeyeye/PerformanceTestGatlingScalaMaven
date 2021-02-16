package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._


class TestAPISimulation extends Simulation {

  //http conf
  val httpconf = http.baseUrl("https://reqres.in")
    .header("Accept", "application/json")
    .header("content-type", "application/json")


  //scenario
  val scenar = scenario("get user")
    .exec(http("get tuser request")
      .get("/api/user/2")
      .check(status is 200))

  //setup
  setUp(scenar.inject(atOnceUsers(500))).protocols(httpconf)
}