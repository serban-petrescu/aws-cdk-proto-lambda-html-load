#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { AwsCdkProtoLambdaHtmlLoadStack } from "../lib/aws-cdk-proto-lambda-html-load-stack";

const app = new cdk.App();
new AwsCdkProtoLambdaHtmlLoadStack(app, "AwsCdkProtoLambdaHtmlLoadStack", {});
