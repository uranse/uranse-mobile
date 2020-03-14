import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import {catchError, tap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public database: SQLiteObject;
  packageType: string = `CREATE TABLE IF NOT EXISTS PackageType (
    Id   INTEGER  PRIMARY KEY ASC AUTOINCREMENT NOT NULL,
    Name          VARCHAR (100) NOT NULL,
    Description   VARCHAR (200),
    MaxWeight     INTEGER,
    WeightSpec    VARCHAR (10),
    MaxLength      INTEGER,
    MaxWidth      INTEGER,
    MaxHeight      INTEGER,
    DimensionSpec VARCHAR (50));
    INSERT INTO PackageType (Id,Name,Description, MaxWeight,WeightSpec,MaxLength,MaxWidth,MaxHeight,DimensionSpec)
VALUES (1,'My Package',150,'lbs',100,100,100,'in');

INSERT INTO PackageType (Id,Name,Description,MaxWeight,WeightSpec)
VALUES (2,'Envelope','Strong envelope for documents up to legal size.',70,'lbs');

INSERT INTO PackageType (Id,Name,Description,MaxWeight,WeightSpec,MaxLength,MaxWidth,MaxHeight,DimensionSpec)
VALUES (3,'Small Box','This Box is suited for a wide range of items, including computer printouts and electronic parts.',150,'lbs',13,11,2,'in');

INSERT INTO PackageType (Id,Name,Description,MaxWeight,WeightSpec,MaxLength,MaxWidth,MaxHeight,DimensionSpec)
VALUES (4,'Large Box','This Box is suited for a wide range of items, including computer printouts and electronic parts.',150,'lbs',18,13,3,'in');

INSERT INTO PackageType (Id,Name,Description,MaxWeight,WeightSpec,MaxLength,MaxWidth,MaxHeight,DimensionSpec)
VALUES (5,'Medium Box','This Box is suited for a wide range of items, including computer printouts and electronic parts.',150,'lbs',16,11,3,'in');

INSERT INTO PackageType (Id,Name,MaxWeight,WeightSpec,MaxLength,MaxWidth,MaxHeight,DimensionSpec)
VALUES (6,'Pak',150,'lbs',17,13,1,'in');`;

  constructor(public sqlite: SQLite) {
    this.sqlite.create({name: 'uranse.db', location: 'default'}).then(
      (db: SQLiteObject) => {
        this.database = db;
        this.createTables();
      }, (error) => {
        console.log('Error: ', error);
      });
  }

  async createTables() {
    try {
        await this.database.executeSql(this.packageType);
    } catch (e) {
        console.log('Error !');
    }
  }
}
