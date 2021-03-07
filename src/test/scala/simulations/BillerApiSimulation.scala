package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._

class BillerApiSimulation extends Simulation {

  //http conf
  val httpconf = http.baseUrl("https://192.168.19.50:")
    .header("Content-Type", "application/json")


  val scenar = scenario("Generate Access Token")


    .exec(http("Generate Token")
      .post("5571/microservice/remita/uaa/token")
      .body(RawFileBody("./src/test/resources/payload/AccessToken.json")).asJson
      .header("Content-Type", "application/json;charset=UTF-8")
      .check(jsonPath("$.data[0].accessToken").saveAs("token")))


    //get specific user on the basis of id
    .exec(http("Get All Biller")
    .get("6201/microservice/remita/gateway/send/api/bgatesvc/v3/billpayment/billers")
    .header("Authorization", "Bearer${token}")
    .check(jsonPath("$.data[0].billerId").is("123"))
    .check(jsonPath("$.data[0].billerName").is("GLEE CORPORATIONS"))
    .check(jsonPath("$.data[0].categoryName").is("EDUCATION")))

  //setup
  setUp(scenar.inject(atOnceUsers(1))).protocols(httpconf)

}