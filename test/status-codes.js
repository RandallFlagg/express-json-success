const success = require('../');
const request = require('supertest');
const express = require('express');
const be = require('bejs');

describe('status codes', function () {
    this.timeout(5000);

    describe('success4xx', function () {

        it('should be return: success false, status code 400', function (done) {
            const app = new express();

            success(app);

            app.use((req, res) => {
                res.success400();
            });

            request(app.listen())
                .get('/')
                .set('Accept', 'application/json')
                .end((err, res) => {
                    console.log(res.body.message);
                    be.err.equal(res.status, 400);
                    be.err.false(res.body.success);
                    done();
                });
        });

        it('custom message, should be return: success false, status code 400', function (done) {
            const app = new express();

            success(app);

            app.use((req, res) => {
                res.success400('custom 400');
            });

            request(app.listen())
                .get('/')
                .set('Accept', 'application/json')
                .end((err, res) => {
                    console.log(res.body.message);
                    be.err.equal(res.status, 400);
                    be.err.equal(res.body.message, 'custom 400');
                    be.err.false(res.body.success);
                    done();
                });
        });

        it('should be return: success false, status code 403', function (done) {
            const app = new express();

            success(app);

            app.use((req, res) => {
                res.success403();
            });

            request(app.listen())
                .get('/')
                .set('Accept', 'application/json')
                .end((err, res) => {
                    console.log(res.body.message);
                    be.err.equal(res.status, 403);
                    be.err.false(res.body.success);
                    done();
                });
        });
    });

    describe('success5xx', function () {

        it('should be return: success false, status code 500', function (done) {
            const app = new express();

            success(app);

            app.use((req, res) => {
                res.success500();
            });

            request(app.listen())
                .get('/')
                .set('Accept', 'application/json')
                .end((err, res) => {
                    console.log(res.body.message);
                    be.err.equal(res.status, 500);
                    be.err.false(res.body.success);
                    done();
                });
        });
    });

});