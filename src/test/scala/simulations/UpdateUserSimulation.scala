package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._

class UpdateUserSimulation extends Simulation {

  //http conf
  val httpconf = http.baseUrl("https://reqres.in")
    .header("Accept", "application/json")
    .header("content-type", "application/json")

  //scenario
  val scenar = scenario("Update User Scenario")

    // first call - update user
    .exec(http("Update specific User")
    .put("/api/users/2")
    .body(RawFileBody("./src/test/resources/payload/UpdateUser.json")).asJson
    .check(status.in(200 to 210)))

    .pause(3)

    // Second call -- delete user
    .exec(http("delete User")
      .delete("/api/users/2")
      .check(status.in(200 to 210)))

  //setup
  setUp(scenar.inject(atOnceUsers(1))).protocols(httpconf)


}
