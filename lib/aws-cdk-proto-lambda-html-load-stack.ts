import { CfnOutput, Duration, Stack, StackProps } from "aws-cdk-lib";
import { FunctionUrlAuthType } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { join } from "path";

export class AwsCdkProtoLambdaHtmlLoadStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const helloLambda = new NodejsFunction(this, "HelloLambda", {
      entry: join(__dirname, "hello.lambda.ts"),
      timeout: Duration.minutes(1),
      bundling: {
        loader: {
          ".html": "text",
        },
      },
    });

    const url = helloLambda.addFunctionUrl({
      authType: FunctionUrlAuthType.NONE,
    });

    new CfnOutput(this, "HelloLambdaUrl", { value: url.url });
  }
}
