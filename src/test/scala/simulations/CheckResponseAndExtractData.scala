package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._

class CheckResponseAndExtractData extends Simulation {

  //http conf
  val httpconf = http.baseUrl("https://gorest.co.in/")
    .header("Authorization", "Bearer 2052c2eb29d6b6bc531a3fa2f99ed7fb71ebb7d12667cac7828f01bedacde0d7")

  //scenario
  val scenar = scenario("Check Correlation and extract Data")

    // get all user
    .exec(http("Get all user")
    .get("public-api/users")
    .check(jsonPath("$.data[2].id").saveAs("userId")))

    //get specific user on the basis of id
    .exec(http("Get Specific User")
    .get("public-api/users/${userId}")
    .check(jsonPath("$.data.id").is("3"))
    .check(jsonPath("$.data.name").is("Sumitra Patil"))
    .check(jsonPath("$.data.email").is("sumitra_patil@schowalter.name")))

  //setup
  setUp(scenar.inject(atOnceUsers(1))).protocols(httpconf)

}