const cdk = require('@aws-cdk/core');
const s3 = require('@aws-cdk/aws-s3')
const glue = require ('@aws-cdk/aws-glue')

class CdkappMainStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const myDatabase = new glue.Database(this, 'MyDatabase', {
      databaseName: 'my_database',
      locationUri: 's3://aniketsbucket'
    });

    new glue.Table(this, 'MyTable', {
      database: myDatabase,
      tableName: 'my_table',
      columns: [{
        name: 'col1',
        type: glue.Schema.STRING,
      }, {
        name: 'col2',
        type: glue.Schema.array(glue.Schema.STRING),
        comment: 'col2 is an array of strings' // comment is optional
      }],
      dataFormat: glue.DataFormat.Json
    });
    
  }
}

module.exports = { CdkappMainStack }
