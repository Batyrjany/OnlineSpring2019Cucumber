$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/login/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "  As user I want to login under different roles",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@VYT-4121"
    }
  ]
});
formatter.scenarioOutline({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.step({
  "name": "user logs in as a \"\u003cuser_type\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user navigates to \"\u003ctab\u003e\" and \"\u003cmodule\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "the page title should be \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "User and navigation info",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user_type",
        "tab",
        "module",
        "title"
      ]
    },
    {
      "cells": [
        "driver",
        "Fleet",
        "Vehicles",
        "Car - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "driver",
        "Fleet",
        "Vehicles Model",
        "Vehicles Model - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "driver",
        "Customers",
        "Accounts",
        "Accounts - Customers"
      ]
    },
    {
      "cells": [
        "driver",
        "Customers",
        "Contacts",
        "Contacts - Customers"
      ]
    },
    {
      "cells": [
        "driver",
        "Activities",
        "Calendar Events",
        "Calendar Events - Activities"
      ]
    },
    {
      "cells": [
        "driver",
        "System",
        "Jobs",
        "Jobs - System"
      ]
    },
    {
      "cells": [
        "sales manager",
        "Fleet",
        "Vehicles",
        "All - Car - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "sales manager",
        "Fleet",
        "Vehicles Model",
        "All - Vehicles Model - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "sales manager",
        "Customers",
        "Accounts",
        "All - Accounts - Customers"
      ]
    },
    {
      "cells": [
        "sales manager",
        "Customers",
        "Contacts",
        "All - Contacts - Customers"
      ]
    },
    {
      "cells": [
        "sales manager",
        "Activities",
        "Calendar Events",
        "All - Calendar Events - Activities"
      ]
    },
    {
      "cells": [
        "sales manager",
        "System",
        "Jobs",
        "All - Jobs - System"
      ]
    },
    {
      "cells": [
        "store manager",
        "Fleet",
        "Vehicles",
        "All - Car - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "store manager",
        "Fleet",
        "Vehicles Model",
        "All - Vehicles Model - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "store manager",
        "Customers",
        "Accounts",
        "All - Accounts - Customers"
      ]
    },
    {
      "cells": [
        "store manager",
        "Customers",
        "Contacts",
        "All - Contacts - Customers"
      ]
    },
    {
      "cells": [
        "store manager",
        "Activities",
        "Calendar Events",
        "All - Calendar Events - Activities"
      ]
    },
    {
      "cells": [
        "store manager",
        "System",
        "Jobs",
        "All - Jobs - System"
      ]
    }
  ]
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as a \"driver\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Fleet\" and \"Vehicles\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"Car - Entities - System - Car - Entities - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as a \"driver\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Fleet\" and \"Vehicles Model\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"Vehicles Model - Entities - System - Car - Entities - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as a \"driver\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Customers\" and \"Accounts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"Accounts - Customers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as a \"driver\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Customers\" and \"Contacts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"Contacts - Customers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as a \"driver\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Activities\" and \"Calendar Events\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"Calendar Events - Activities\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as a \"driver\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"System\" and \"Jobs\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"Jobs - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as a \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Fleet\" and \"Vehicles\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"All - Car - Entities - System - Car - Entities - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as a \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Fleet\" and \"Vehicles Model\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"All - Vehicles Model - Entities - System - Car - Entities - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as a \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Customers\" and \"Accounts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"All - Accounts - Customers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as a \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Customers\" and \"Contacts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"All - Contacts - Customers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as a \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Activities\" and \"Calendar Events\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"All - Calendar Events - Activities\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as a \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"System\" and \"Jobs\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"All - Jobs - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as a \"store manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Fleet\" and \"Vehicles\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"All - Car - Entities - System - Car - Entities - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Batyrs-MacBook-Pro.local\u0027, ip: \u00272601:600:8080:2109:69ff:baf6:e46e:f3ed%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002711.0.2\u0027\nDriver info: driver.version: Driver\nremote stacktrace: 0   chromedriver                        0x0000000100974129 chromedriver + 3649833\n1   chromedriver                        0x0000000100904133 chromedriver + 3191091\n2   chromedriver                        0x00000001006a4b42 chromedriver + 703298\n3   chromedriver                        0x0000000100699c09 chromedriver + 658441\n4   chromedriver                        0x00000001006104ed chromedriver + 95469\n5   chromedriver                        0x000000010060c6a8 chromedriver + 79528\n6   chromedriver                        0x0000000100639179 chromedriver + 262521\n7   chromedriver                        0x0000000100636793 chromedriver + 251795\n8   chromedriver                        0x00000001006127e2 chromedriver + 104418\n9   chromedriver                        0x00000001006138a5 chromedriver + 108709\n10  chromedriver                        0x0000000100931c1f chromedriver + 3378207\n11  chromedriver                        0x000000010093d940 chromedriver + 3426624\n12  chromedriver                        0x000000010093d6d8 chromedriver + 3426008\n13  chromedriver                        0x0000000100912069 chromedriver + 3248233\n14  chromedriver                        0x000000010093e1b8 chromedriver + 3428792\n15  chromedriver                        0x0000000100925f07 chromedriver + 3329799\n16  chromedriver                        0x000000010095b014 chromedriver + 3547156\n17  chromedriver                        0x0000000100979e67 chromedriver + 3673703\n18  libsystem_pthread.dylib             0x00007fff72ed12eb _pthread_body + 126\n19  libsystem_pthread.dylib             0x00007fff72ed4249 _pthread_start + 66\n20  libsystem_pthread.dylib             0x00007fff72ed040d thread_start + 13\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat com.vytrack.utilities.Driver.getDriver(Driver.java:32)\n\tat com.vytrack.utilities.Driver.getDriver(Driver.java:74)\n\tat com.vytrack.step_definitions.Hook.setup(Hook.java:19)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:40)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:67)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:22)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:72)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\n",
  "status": "failed"
});
formatter.step({
  "name": "user logs in as a \"store manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to \"Fleet\" and \"Vehicles Model\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the page title should be \"All - Vehicles Model - Entities - System - Car - Entities - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as a \"store manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Customers\" and \"Accounts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"All - Accounts - Customers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as a \"store manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Customers\" and \"Contacts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"All - Contacts - Customers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as a \"store manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Activities\" and \"Calendar Events\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"All - Calendar Events - Activities\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "page titles with different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VYT-4121"
    },
    {
      "name": "@login_with_outline_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as a \"store manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"System\" and \"Jobs\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"All - Jobs - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});