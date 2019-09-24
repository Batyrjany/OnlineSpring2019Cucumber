$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/fleet/vehicles/CreateCar.feature");
formatter.feature({
  "name": "Create a Car",
  "description": "  As user I want to be able to create a car",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@create_a_car"
    }
  ]
});
formatter.scenario({
  "name": "Create a regular car",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@create_a_car"
    }
  ]
});
formatter.before({
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Batyrs-MacBook-Pro.local\u0027, ip: \u00272601:600:8080:7950:dc9e:e3d5:7406:9b7b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002711.0.2\u0027\nDriver info: driver.version: Driver\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:573)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\n\tat com.vytrack.utilities.Driver.getDriver(Driver.java:75)\n\tat com.vytrack.utilities.Driver.getDriver(Driver.java:89)\n\tat com.vytrack.step_definitions.Hook.setup(Hook.java:21)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:40)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:67)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:22)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:72)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\n\tat org.apache.maven.surefire.junitcore.pc.InvokerStrategy.schedule(InvokerStrategy.java:54)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler.schedule(Scheduler.java:367)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\n\tat java.base/java.lang.Thread.run(Thread.java:834)\nCaused by: java.net.ConnectException: Failed to connect to /18.209.44.3:4444\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:247)\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:165)\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\n\tat okhttp3.RealCall.execute(RealCall.java:77)\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:105)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\t... 49 more\nCaused by: java.net.ConnectException: Operation timed out (Connection timed out)\n\tat java.base/java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.base/java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:399)\n\tat java.base/java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:242)\n\tat java.base/java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:224)\n\tat java.base/java.net.SocksSocketImpl.connect(SocksSocketImpl.java:403)\n\tat java.base/java.net.Socket.connect(Socket.java:591)\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:245)\n\t... 71 more\n",
  "status": "failed"
});
formatter.step({
  "name": "user logs in as a \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to \"Fleet\" and \"Vehicles\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies that \"All Cars\" page name is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_verifies_that_page_name_is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the create a car button",
  "keyword": "Then "
});
formatter.match({
  "location": "VehiclesStepDefinitions.user_clicks_on_the_create_a_car_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters car information:",
  "rows": [
    {
      "cells": [
        "License Plate",
        "Cybertek"
      ]
    },
    {
      "cells": [
        "Driver",
        "Spartan"
      ]
    },
    {
      "cells": [
        "Location",
        "Alaska"
      ]
    },
    {
      "cells": [
        "Model Year",
        "2019"
      ]
    },
    {
      "cells": [
        "Color",
        "Black"
      ]
    },
    {
      "cells": [
        "Power",
        "500"
      ]
    },
    {
      "cells": [
        "Vehicle Make",
        "BMW"
      ]
    },
    {
      "cells": [
        "Vehicle Model",
        "X5M"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "VehiclesStepDefinitions.user_enters_car_information(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks save and close",
  "keyword": "Then "
});
formatter.match({
  "location": "VehiclesStepDefinitions.user_clicks_save_and_close()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies that general information is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "VehiclesStepDefinitions.user_verifies_that_general_information_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Batyrs-MacBook-Pro.local\u0027, ip: \u00272601:600:8080:7950:dc9e:e3d5:7406:9b7b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002711.0.2\u0027\nDriver info: driver.version: Driver\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:573)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\n\tat com.vytrack.utilities.Driver.getDriver(Driver.java:75)\n\tat com.vytrack.utilities.Driver.getDriver(Driver.java:89)\n\tat com.vytrack.step_definitions.Hook.teardown(Hook.java:29)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:67)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:22)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:72)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\n\tat org.apache.maven.surefire.junitcore.pc.InvokerStrategy.schedule(InvokerStrategy.java:54)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler.schedule(Scheduler.java:367)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\n\tat java.base/java.lang.Thread.run(Thread.java:834)\nCaused by: java.net.ConnectException: Failed to connect to /18.209.44.3:4444\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:247)\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:165)\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\n\tat okhttp3.RealCall.execute(RealCall.java:77)\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:105)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\t... 49 more\nCaused by: java.net.ConnectException: Operation timed out (Connection timed out)\n\tat java.base/java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.base/java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:399)\n\tat java.base/java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:242)\n\tat java.base/java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:224)\n\tat java.base/java.net.SocksSocketImpl.connect(SocksSocketImpl.java:403)\n\tat java.base/java.net.Socket.connect(Socket.java:591)\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:245)\n\t... 71 more\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Create a regular car (with list of maps)",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@create_a_car"
    },
    {
      "name": "@create_a_car_with_list_of_maps"
    }
  ]
});
formatter.before({
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Batyrs-MacBook-Pro.local\u0027, ip: \u00272601:600:8080:7950:dc9e:e3d5:7406:9b7b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002711.0.2\u0027\nDriver info: driver.version: Driver\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:573)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\n\tat com.vytrack.utilities.Driver.getDriver(Driver.java:75)\n\tat com.vytrack.utilities.Driver.getDriver(Driver.java:89)\n\tat com.vytrack.step_definitions.Hook.setup(Hook.java:21)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:40)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:67)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:22)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:72)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\n\tat org.apache.maven.surefire.junitcore.pc.InvokerStrategy.schedule(InvokerStrategy.java:54)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler.schedule(Scheduler.java:367)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\n\tat java.base/java.lang.Thread.run(Thread.java:834)\nCaused by: java.net.ConnectException: Failed to connect to /18.209.44.3:4444\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:247)\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:165)\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\n\tat okhttp3.RealCall.execute(RealCall.java:77)\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:105)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\t... 49 more\nCaused by: java.net.ConnectException: Operation timed out (Connection timed out)\n\tat java.base/java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.base/java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:399)\n\tat java.base/java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:242)\n\tat java.base/java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:224)\n\tat java.base/java.net.SocksSocketImpl.connect(SocksSocketImpl.java:403)\n\tat java.base/java.net.Socket.connect(Socket.java:591)\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:245)\n\t... 71 more\n",
  "status": "failed"
});
formatter.step({
  "name": "user logs in as a \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to \"Fleet\" and \"Vehicles\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies that \"All Cars\" page name is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_verifies_that_page_name_is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the create a car button",
  "keyword": "Then "
});
formatter.match({
  "location": "VehiclesStepDefinitions.user_clicks_on_the_create_a_car_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters car information to create a car",
  "rows": [
    {
      "cells": [
        "License Plate",
        "Driver",
        "Location",
        "Model Year",
        "Color",
        "Power",
        "Vehicle Make",
        "Vehicle Model"
      ]
    },
    {
      "cells": [
        "Cybertek",
        "Spartan",
        "Alaska",
        "2019",
        "Black",
        "500",
        "BMW",
        "X5M"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "VehiclesStepDefinitions.user_enters_car_information_to_create_a_car(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks save and close",
  "keyword": "Then "
});
formatter.match({
  "location": "VehiclesStepDefinitions.user_clicks_save_and_close()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies that general information is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "VehiclesStepDefinitions.user_verifies_that_general_information_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Batyrs-MacBook-Pro.local\u0027, ip: \u00272601:600:8080:7950:dc9e:e3d5:7406:9b7b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002711.0.2\u0027\nDriver info: driver.version: Driver\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:573)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\n\tat com.vytrack.utilities.Driver.getDriver(Driver.java:75)\n\tat com.vytrack.utilities.Driver.getDriver(Driver.java:89)\n\tat com.vytrack.step_definitions.Hook.teardown(Hook.java:29)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:67)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:22)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:72)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\n\tat org.apache.maven.surefire.junitcore.pc.InvokerStrategy.schedule(InvokerStrategy.java:54)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler.schedule(Scheduler.java:367)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\n\tat java.base/java.lang.Thread.run(Thread.java:834)\nCaused by: java.net.ConnectException: Failed to connect to /18.209.44.3:4444\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:247)\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:165)\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\n\tat okhttp3.RealCall.execute(RealCall.java:77)\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:105)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\t... 49 more\nCaused by: java.net.ConnectException: Operation timed out (Connection timed out)\n\tat java.base/java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.base/java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:399)\n\tat java.base/java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:242)\n\tat java.base/java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:224)\n\tat java.base/java.net.SocksSocketImpl.connect(SocksSocketImpl.java:403)\n\tat java.base/java.net.Socket.connect(Socket.java:591)\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:245)\n\t... 71 more\n",
  "status": "failed"
});
formatter.uri("src/test/resources/features/fleet/vehicles/Vehicles.feature");
formatter.feature({
  "name": "Vehicles",
  "description": "  As user I want to see list of all vehicles",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@vehicles"
    }
  ]
});
formatter.scenario({
  "name": "Login as driver and navigate to the Vehicles",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@vehicles"
    }
  ]
});
formatter.before({
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Batyrs-MacBook-Pro.local\u0027, ip: \u00272601:600:8080:7950:dc9e:e3d5:7406:9b7b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002711.0.2\u0027\nDriver info: driver.version: Driver\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:573)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\n\tat com.vytrack.utilities.Driver.getDriver(Driver.java:75)\n\tat com.vytrack.utilities.Driver.getDriver(Driver.java:89)\n\tat com.vytrack.step_definitions.Hook.setup(Hook.java:21)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:40)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:67)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:22)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:72)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\n\tat org.apache.maven.surefire.junitcore.pc.InvokerStrategy.schedule(InvokerStrategy.java:54)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler.schedule(Scheduler.java:367)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\n\tat java.base/java.lang.Thread.run(Thread.java:834)\nCaused by: java.net.ConnectException: Failed to connect to /18.209.44.3:4444\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:247)\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:165)\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\n\tat okhttp3.RealCall.execute(RealCall.java:77)\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:105)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\t... 49 more\nCaused by: java.net.ConnectException: Operation timed out (Connection timed out)\n\tat java.base/java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.base/java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:399)\n\tat java.base/java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:242)\n\tat java.base/java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:224)\n\tat java.base/java.net.SocksSocketImpl.connect(SocksSocketImpl.java:403)\n\tat java.base/java.net.Socket.connect(Socket.java:591)\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:245)\n\t... 71 more\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs in as a \"driver\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to \"Fleet\" and \"Vehicles\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies that \"Cars\" page name is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_verifies_that_page_name_is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies that default page number is 1",
  "keyword": "And "
});
formatter.match({
  "location": "VehiclesStepDefinitions.user_verifies_that_default_page_number_is(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Batyrs-MacBook-Pro.local\u0027, ip: \u00272601:600:8080:7950:dc9e:e3d5:7406:9b7b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002711.0.2\u0027\nDriver info: driver.version: Driver\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:573)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\n\tat com.vytrack.utilities.Driver.getDriver(Driver.java:75)\n\tat com.vytrack.utilities.Driver.getDriver(Driver.java:89)\n\tat com.vytrack.step_definitions.Hook.teardown(Hook.java:29)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:67)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:22)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:72)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\n\tat org.apache.maven.surefire.junitcore.pc.InvokerStrategy.schedule(InvokerStrategy.java:54)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler.schedule(Scheduler.java:367)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\n\tat java.base/java.lang.Thread.run(Thread.java:834)\nCaused by: java.net.ConnectException: Failed to connect to /18.209.44.3:4444\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:247)\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:165)\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\n\tat okhttp3.RealCall.execute(RealCall.java:77)\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:105)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\t... 49 more\nCaused by: java.net.ConnectException: Operation timed out (Connection timed out)\n\tat java.base/java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.base/java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:399)\n\tat java.base/java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:242)\n\tat java.base/java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:224)\n\tat java.base/java.net.SocksSocketImpl.connect(SocksSocketImpl.java:403)\n\tat java.base/java.net.Socket.connect(Socket.java:591)\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:245)\n\t... 71 more\n",
  "status": "failed"
});
});